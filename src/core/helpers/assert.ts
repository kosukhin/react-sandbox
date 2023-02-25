export const assert = (condition: boolean, message: string) => {
    if (!assert) {
        throw new Error(message)
    }
}