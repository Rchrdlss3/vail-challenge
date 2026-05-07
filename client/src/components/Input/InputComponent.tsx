import { useContext } from "react"
import { MessageContext } from "../../pages/HomePage"

export default function InputComponent() {
    const PingMessage = useContext(MessageContext);
    return (
        <input
        style = {{width: '600px', height: '80px',textAlign: 'center', borderRadius: '5px', border: '1px solid', fontWeight: 800, fontSize: '2em'}}
            value = {PingMessage?.message.echo}
            onChange = {(e)=> {
                PingMessage?.setMessage({...PingMessage.message,echo: e.target.value})
            }}
        />
    )
}