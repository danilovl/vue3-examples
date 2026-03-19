<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 id="global-title" class="card-header">{{ texts.global.title }}</h5>
                <div id="filter-global-title" class="card-body">
                    <p class="card-text">
                        Original: <strong>{{ texts.global.text }}</strong>
                    </p>
                    <p>
                        Filtered: <strong>{{ $filters.capitalizeFirstLetter(texts.global.text) }}</strong>
                    </p>
                </div>
            </div>
            <div class="card mb-4">
                <h5 id="local-title" class="card-header">{{ texts.local.title }}</h5>
                <div id="filter-local-title" class="card-body">
                    <p class="card-text">
                        Original: <strong>{{ texts.local.text }}</strong>
                    </p>
                    <p>
                        Filtered: <strong>{{ toUpperCase(texts.local.text) }}</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const texts = {
    global: {
        title: 'Global filter - capitalizeFirstLetter',
        text: 'example text'
    },
    local: {
        title: 'Local filter - toUpperCase',
        text: 'example'
    }
}

const toUpperCase = (string: string): string => string.toUpperCase()
</script>
