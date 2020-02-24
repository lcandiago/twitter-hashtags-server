import app from './app';
import { port } from '../config/enviroments';

app.listen(port, () => console.log(`Listening on port ${port}`));
