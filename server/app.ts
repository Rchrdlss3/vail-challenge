import express, {Application, Request, Response} from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import PingRouter from './routes/ping';
import config from './config/config';
import cors from "cors";
import { corsOptions } from './utils/cors';

const app: Application = express();
const swaggerApp:Application = express();

app.use(cors(corsOptions))
swaggerApp.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
swaggerApp.listen(8001, () => {})
app.use(express.json());
app.listen(config.port)
app.use('/ping',PingRouter)

export default app