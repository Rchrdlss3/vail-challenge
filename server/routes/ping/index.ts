import express from 'express'
import PingController from '../../controllers/ping';
const PingRouter = express.Router();
PingRouter.post('/',PingController.post)
export default PingRouter;