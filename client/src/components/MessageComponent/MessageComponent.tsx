import { useContext, useEffect, useRef, useState } from "react"
import { MessageContext } from "../../pages/HomePage"

export default function MessaageComponent() {
    const PingMessage = useContext(MessageContext);
    return (
        <div style = {{
            width: '800px', 
            height: '400px', 
            border: '1px solid', 
            borderRadius: 5,
            display: 'flex',
            gap: 0,
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            fontWeight: 800
            }}>
            {PingMessage?.message.timestamp && 
            <div>
                <p>{PingMessage?.message.echo}</p>
                <p>{PingMessage?.message.env}</p>
                <p>{PingMessage?.message.timestamp}</p>
                <p>{PingMessage?.message.version}</p>
            </div>
            }

        </div>
    )
}