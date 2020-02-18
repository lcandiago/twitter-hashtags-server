import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import routes from './routes';

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.WEB_CLIENT_URL }));
app.use(routes);

app.listen(process.env.PORT);
