<template>
    <div class="row">
        <div class="col-md-6">
            <app-card title="1. Form Schema Builder">
                <div v-for="(fieldItem, index) in fields" :key="fieldItem.key" class="contact-row mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <strong>Field #{{ index + 1 }}</strong>
                        <app-button variant="danger" small @click="remove(index)" v-if="fields.length > 1">
                            &times;
                        </app-button>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <Field :name="`fields[${index}].label`" rules="required"
                                   v-slot="{ field: f, errorMessage, handleChange, handleBlur }">
                                <app-input
                                    :model-value="f.value"
                                    @update:model-value="handleChange"
                                    @blur="handleBlur"
                                    label="Label"
                                    placeholder="e.g. Full Name"
                                    :error="errorMessage"
                                />
                            </Field>
                        </div>
                        <div class="col-md-6">
                            <Field :name="`fields[${index}].name`" rules="required|alpha_dash"
                                   v-slot="{ field: f, errorMessage, handleChange, handleBlur }">
                                <app-input
                                    :model-value="f.value"
                                    @update:model-value="handleChange"
                                    @blur="handleBlur"
                                    label="Property Name"
                                    placeholder="e.g. fullName"
                                    :error="errorMessage"
                                />
                            </Field>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <Field :name="`fields[${index}].type`" v-slot="{ field: f, handleChange }">
                                <app-select
                                    :model-value="f.value"
                                    @update:model-value="handleChange"
                                    label="Type"
                                    :options="typeOptions"
                                />
                            </Field>
                        </div>
                        <div class="col-md-6">
                            <Field :name="`fields[${index}].rules`" v-slot="{ field: f, handleChange, handleBlur }">
                                <app-input
                                    :model-value="f.value"
                                    @update:model-value="handleChange"
                                    @blur="handleBlur"
                                    label="Rules"
                                    placeholder="e.g. required|email"
                                />
                                <div class="validator-list mt-1">
                  <span
                      v-for="rule in availableRules"
                      :key="rule"
                      class="badge me-1"
                      :class="isRuleActive(f.value, rule) ? 'active' : 'bg-light text-dark'"
                      @click="handleChange(toggleRule(f.value, rule))"
                  >
                    {{ rule }}
                  </span>
                                </div>
                            </Field>
                        </div>
                    </div>

                    <Field :name="`fields[${index}].defaultValue`" v-slot="{ field: f, handleChange, handleBlur }">
                        <app-input
                            :model-value="f.value"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                            label="Default Value"
                        />
                    </Field>
                </div>

                <app-button variant="outline" class="w-100 mb-3"
                            @click="push({ label: '', name: '', type: 'text', rules: '', defaultValue: '' })">
                    + Add New Field
                </app-button>

                <div class="mt-3 text-muted small">
                    * Changes are automatically reflected in the renderer.
                </div>
            </app-card>
        </div>

        <div class="col-md-6">
            <app-card title="2. Dynamic Form Preview">
                <div v-if="dynamicSchema.length === 0" class="text-center p-4">
                    <p class="text-muted">No fields defined yet. Add some fields in the builder.</p>
                </div>

                <Form
                    v-else
                    @submit="onFormSubmit"
                    :key="formKey"
                    :initial-values="generatedInitialValues"
                    :validation-schema="dynamicValidationSchema"
                >
                    <div v-for="field in dynamicSchema" :key="field.name">
                        <Field v-if="field.name" :name="field.name"
                               v-slot="{ field: f, errorMessage, handleChange, handleBlur }">
                            <app-input
                                :model-value="f.value"
                                @update:model-value="handleChange"
                                @blur="handleBlur"
                                :label="field.label"
                                :type="field.type"
                                :placeholder="'Enter ' + field.label.toLowerCase()"
                                :error="errorMessage"
                            />
                        </Field>
                    </div>

                    <div class="mt-4 pt-3 border-top">
                        <app-button type="submit" :loading="isSubmitting">
                            Submit Generated Form
                        </app-button>
                    </div>

                    <div class="mt-4" v-if="submittedData">
                        <h6>Form Results:</h6>
                        <pre>{{ submittedData }}</pre>
                    </div>
                </Form>
            </app-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, computed, watch} from 'vue'
import {Form, Field, defineRule, useForm, useFieldArray} from 'vee-validate'
import AppCard from '@/component/AppCard.vue'
import AppInput from '@/component/AppInput.vue'
import AppSelect from '@/component/AppSelect.vue'
import AppButton from '@/component/AppButton.vue'
import {useToastStore} from '@/store/module/toast'

const requiredValidator = (value: any) => {
    if (value === undefined || value === null || (typeof value === 'string' && value.trim() === '')) {
        return 'This field is required'
    }
    
    if (Array.isArray(value) && value.length === 0) {
        return 'This field is required'
    }

    return true
}

defineRule('required', requiredValidator)
defineRule('require', requiredValidator)

defineRule('email', (value: string) => {
    if (!value || !value.length) {
        return true
    }

    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value)) {
        return 'This field must be a valid email'
    }

    return true
})

defineRule('alpha_dash', (value: string) => {
    if (!value || !value.length) {
        return true
    }

    if (!/^[0-9A-Z_-]*$/i.test(value)) {
        return 'This field may contain alpha-numeric characters as well as dashes and underscores'
    }
    
    return true
})

defineRule('min', (value: any, [limit]: [any]) => {
    if (value === undefined || value === null || value === '') {
        return true
    }

    const limitNum = Number(limit)

    if (typeof value === 'number') {
        if (value < limitNum) {
            return `Value must be at least ${limitNum}`
        }

        return true
    }

    if (String(value).length < limitNum) {
        return `Must be at least ${limitNum} characters`
    }

    return true
})

defineRule('max', (value: any, [limit]: [any]) => {
    if (value === undefined || value === null || value === '') {
        return true
    }
    const limitNum = Number(limit)

    if (typeof value === 'number') {
        if (value > limitNum) {
            return `Value must not exceed ${limitNum}`
        }

        return true
    }

    if (String(value).length > limitNum) {
        return `Must not exceed ${limitNum} characters`
    }

    return true
})

defineRule('numeric', (value: any) => {
    if (value === undefined || value === null || value === '') {
        return true
    }
    
    if (!/^[0-9]+$/.test(String(value))) {
        return 'This field must be numeric'
    }

    return true
})

const toastStore = useToastStore()
const isSubmitting = ref(false)
const submittedData = ref<any>(null)
const formKey = ref(0)

const availableRules = ['required', 'email', 'numeric', 'min:5', 'max:20']

const isRuleActive = (current: any, rule: string) => {
    const currentStr = String(current || '')

    return currentStr.split('|').map(r => r.trim()).filter(Boolean).includes(rule)
}

const toggleRule = (current: any, rule: string) => {
    const currentStr = String(current || '')
    const rules = currentStr.split('|').map(r => r.trim()).filter(Boolean)
    const index = rules.indexOf(rule)

    if (index > -1) {
        rules.splice(index, 1)
    } else {
        rules.push(rule)
    }

    return rules.join('|')
}

const typeOptions = [
    {label: 'Text', value: 'text'},
    {label: 'Email', value: 'email'},
    {label: 'Number', value: 'number'},
    {label: 'Password', value: 'password'}
]

const schemaInitialValues = {
    fields: [
        {label: 'Your Name', name: 'name', type: 'text', rules: 'required', defaultValue: ''},
        {label: 'Email Address', name: 'email', type: 'email', rules: 'required|email', defaultValue: ''}
    ]
}

const {values: builderValues} = useForm({
    initialValues: schemaInitialValues
})

const {fields, push, remove} = useFieldArray('fields')

const dynamicSchema = ref<any[]>([])

const syncSchema = (fields: any[]) => {
    if (!fields) {
        dynamicSchema.value = []
        return
    }

    dynamicSchema.value = fields
        .filter(f => f && f.name && f.name.trim() !== '')
        .map(f => ({...f}))
}

watch(() => builderValues.fields, (newFields) => {
    syncSchema(newFields)
    submittedData.value = null
}, {deep: true, immediate: true})

const dynamicValidationSchema = computed(() => {
    const schema: any = {}
    dynamicSchema.value.forEach(field => {
        if (field.name) {
            schema[field.name] = field.rules || ''
        }
    })
    
    return schema
})

const generatedInitialValues = computed(() => {
    const values: any = {}
    dynamicSchema.value.forEach(field => {
        let val: any = field.defaultValue || ''
        if (field.type === 'number' && val !== '' && !isNaN(Number(val))) {
            val = Number(val)
        }
        values[field.name] = val
    })
    
    return values
})

watch([
    () => JSON.stringify(generatedInitialValues.value),
    () => JSON.stringify(dynamicValidationSchema.value)
], () => {
    formKey.value++
})

const onFormSubmit = async (values: any) => {
    isSubmitting.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    submittedData.value = values
    isSubmitting.value = false
    toastStore.success('Generated form submitted!')
}
</script>
