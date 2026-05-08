import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import ButtonComponent from "../components/Button";
import InputComponent from "../components/Input";
import { PingMessage } from "../types/PingTypes";
import MessaageComponent from "../components/MessageComponent";
import { ClipLoader } from "react-spinners";

type MessageContextType = {
    message : PingMessage;
    setMessage: Dispatch<SetStateAction<PingMessage>>
}
type LoadingContextType = {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>
}
export const MessageContext = createContext<MessageContextType | null>(null);
export const LoadingContext = createContext<LoadingContextType | null>(null);

export default function HomePage () {
    const [loading, setLoading] = useState(true);
    const [message,setMessage] = useState<PingMessage>({} as PingMessage);
    const [search,setSearch] = useState('');

    useEffect(() => {
        setLoading(false)
    },[]);

    return (
        <div style = {{
            minWidth: '100vw', 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5
            }}>
        {loading ? <ClipLoader/> : 
        <MessageContext.Provider value = {{message,setMessage}}>
            <LoadingContext.Provider value = {{loading,setLoading}}>
            <InputComponent search={search} setSearch={setSearch}/>
            <ButtonComponent search= {search}/>
            {loading ? <ClipLoader />:<MessaageComponent />}
            </LoadingContext.Provider>
        </MessageContext.Provider>
    }
        </div>
    )
}