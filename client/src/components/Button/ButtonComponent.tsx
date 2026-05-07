import { useContext, useState } from "react"
import { LoadingContext, MessageContext } from "../../pages/HomePage"
import { sendMessage } from "../../apis/PingApi";
import { PingMessageValidator } from "../../utils/PingMessageFunctions";

export default function ButtonComponent () {
    const PingMessage = useContext(MessageContext);
    const loading = useContext(LoadingContext);
    const [errorMessage,setErrorMessage] = useState('');
    return (
        <div style = {{flexShrink: 0, textAlign: 'center'}}>
        <button
        onClick = {async () => {
            loading?.setLoading(true)
            if (PingMessage?.message.echo) {
                const validation = PingMessageValidator(PingMessage.message.echo)
                if (validation.valid) {
                    setErrorMessage('')
                    const responseMessage = await sendMessage(validation.message)
                    PingMessage.setMessage(responseMessage.pingMessage)
                } else {
                    setErrorMessage(validation.message)
                }
            }
            loading?.setLoading(false)
        }}        
        >{errorMessage ? 'Retry':'Submit'}</button>
                    <p style = {{
            display: errorMessage.length > 0 ? 'block' : 'none',
            color: 'red'
            }}>{errorMessage}</p>
        </div>
    )
}