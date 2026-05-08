import { Dispatch, SetStateAction } from "react"
import TextField from '@mui/material/TextField'
import { TextFieldStyle } from "../../styles/General";

interface InputComponentProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export default function InputComponent({search,setSearch}:InputComponentProps) {
    
    return (
        <TextField 
        placeholder="Please Enter 20 Lowercase Characters."
        sx={TextFieldStyle}
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
        />
    )
}