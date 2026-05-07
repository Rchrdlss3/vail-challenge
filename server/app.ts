import express, {Application, Request, Response} from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import PingRouter from './routes/ping';
import config from './config/config';
import cors from "cors";

const app: Application = express();
const swaggerApp = express();
const corsOptions = {
    origin: ["http://localhost:3000"],  
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
    credentials: true
};
app.use(cors(corsOptions))
swaggerApp.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
swaggerApp.listen(8001, () => {})
app.use(express.json());
app.listen(config.port)
app.use('/ping',PingRouter)
app.post('/', (req:Request,res:Response) => {
    res.status(200).json('Hello World')
});
export default app