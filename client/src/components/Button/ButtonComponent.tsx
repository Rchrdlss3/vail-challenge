import { useContext, useState } from "react"
import { LoadingContext, MessageContext } from "../../pages/HomePage"
import { sendMessage } from "../../apis/PingApi";
import { PingMessageValidator } from "../../utils/PingMessageFunctions";
import { Button } from "@mui/material";

interface ButtonComponentProps {
    search: string;
}

export default function ButtonComponent ({search}:ButtonComponentProps) {
    const PingMessage = useContext(MessageContext);
    const loading = useContext(LoadingContext);
    const [errorMessage,setErrorMessage] = useState('');

    return (
        <div style = {{flexShrink: 0, textAlign: 'center'}}>
        <Button
        onClick = {async () => {
            loading?.setLoading(true)
            const validation = PingMessageValidator(search)
                if (validation.valid) {
                    setErrorMessage('')
                    const responseMessage = await sendMessage(validation.message)
                    PingMessage?.setMessage(responseMessage.pingMessage)
                } else {
                    setErrorMessage(validation.message)
                }
            loading?.setLoading(false)
        }}        
        >{errorMessage ? 'Retry':'Submit'}
        </Button>
                    <p style = {{
            display: errorMessage.length > 0 ? 'block' : 'none',
            color: 'red'
            }}>{errorMessage}</p>
        </div>
    )
}