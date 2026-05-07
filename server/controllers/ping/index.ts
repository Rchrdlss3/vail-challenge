import { Request,Response } from "express";
import { PingMessage } from "../../types/Ping.types";
import pjson from '../../package.json' with {type: 'json'}
import config from "../../config/config";
const PingController = {
    post: (req:Request,res:Response) => {
        try {
            const message = req.query.message as string
            const returnedMessage:PingMessage = {
                echo: message,
                timestamp: Math.floor(Date.now()/1000),
                env: config.env,
                version: pjson.version
            }
            res.status(200).json(returnedMessage)
        } catch (e) {

        }
    }
};
export default PingController;