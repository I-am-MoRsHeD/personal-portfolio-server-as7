import express, { type Request, type Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { envVars } from './config/env';
import { router } from './routes';
import { globalErrorHandler } from './middleware/globalErrorHandler';


const app = express();

app.use(cookieParser());
app.use(express.json());
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: envVars.FRONTEND_URL,
    credentials: true
}));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to My Personal Portfolio!!');
});

app.use(globalErrorHandler);

export default app;