import express from 'express';
import cors from 'cors';
import { webClient } from '../config/enviroments';

import routes from './routes';

const app = express();

app.use(cors({ origin: webClient }));
app.use(express.json());
app.use(routes);

export default app;
