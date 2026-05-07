// Must be lowercased, must have 20 characters
type validation = {
    message: string
    valid: boolean
}
export function PingMessageValidator (inputMessage: string):validation {
    if (inputMessage.length < 20) {
        return {message: 'Invalid Length. Must be 20 characters or more.', valid: false}
    }
    if (inputMessage !== inputMessage.toLowerCase()) {
        return {message: 'Invalid input. All characters must be lowercase.', valid: false}
    }
    return {message: inputMessage, valid: true}
}