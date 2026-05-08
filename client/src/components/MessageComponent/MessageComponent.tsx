import { useContext, useEffect, useRef, useState } from "react"
import { MessageContext } from "../../pages/HomePage"
import { Box } from "@mui/material";
import Typography from "@mui/material";
import { BoxTextDisplayStyle, MessageBoxStyle } from "../../styles/General";

export default function MessageComponent() {
    const PingMessage = useContext(MessageContext);
    return (
        <Box 
            sx = {MessageBoxStyle}>
            {PingMessage?.message.timestamp && 
            <div>
                <Box sx={{ color: 'text.secondary' }}>Message</Box>
                <Box sx={BoxTextDisplayStyle}>{PingMessage?.message.echo}</Box>
                <Box sx={{ color: 'text.secondary' }}>Environment</Box>
                <Box sx={BoxTextDisplayStyle}>{PingMessage?.message.env}</Box>
                <Box sx={{ color: 'text.secondary' }}>Timestamp</Box>
                <Box sx={BoxTextDisplayStyle}>{PingMessage?.message.timestamp}</Box>
                <Box sx={{ color: 'text.secondary' }}>Version</Box>
                <Box sx={BoxTextDisplayStyle}>{PingMessage?.message.version}</Box>
            </div> 
            }
        </Box>
    )
}