import { SxProps } from "@mui/material";

export const BoxTextDisplayStyle:SxProps = {
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: '#fff',
          color: 'grey.800',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700'
};

export const MessageBoxStyle:SxProps = {
                width: '800px', 
                height: '400px', 
                border: '1px solid', 
                borderColor: 'grey.300',
                borderRadius: 5,
                display: 'flex',
                gap: 0,
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 800
};

export const TextFieldStyle:SxProps = {
            width: '600px', 
            height: '80px',
            textAlign: 'center', 
            borderRadius: '5px',  
            fontWeight: 800, 
            fontSize: '2em'
};