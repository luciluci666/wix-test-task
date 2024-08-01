export function setNestedProperty(obj: any, path: string, value: any): void {
    const keys = path.split('.')
    let target = obj
    for (let i = 0; i < keys.length - 1; i++) {
        if (!target[keys[i]]) {
            target[keys[i]] = {}
        }
        target = target[keys[i]]
    }
    target[keys[keys.length - 1]] = value
}