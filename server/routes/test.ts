import express from 'express'
import PingController from '../controllers/ping';
// Comments here
const PingRouter = express.Router();
PingRouter.post('/',PingController.post)
export default PingRouter;