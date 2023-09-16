export function sleep(ms: number): Promise<null> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

type Entries<T> = {
    [K in keyof T]: [K, T[K]]
}[keyof T][]

export function objectEntries<T>(obj: T): Entries<T> {
    return Object.entries(obj) as any
}

export const messageUniqueIdentifierSymbol = Symbol('User settings state provider identifier')
