import { PingMessage } from "../types/PingTypes";

export type returnType = {
    pingMessage: PingMessage;
    message?: string;
    valid: boolean;
};
export const sendMessage = async (message:string):Promise<returnType> => {
    const output = {valid: false} as returnType
    try {
        const res = await fetch(`http://localhost:8000/ping?message=${message}`, {
            method: 'POST'
        });
        if (res.status == 200) {
            const data = await res.json() as PingMessage
            return {pingMessage: data, valid: true}
        }
        if (res.status >= 400 && res.status <= 499) {
            output.message = 'Error with sending data properly.'
        }
        if (res.status >= 500) {
            output.message = 'Error on server side'
        }
        return output
    } catch (e) {
        return output
        console.error(e)
    }
}