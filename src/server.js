const app = require('./app');
const { port } = require('../config/enviroments');

app.listen(port, () => console.log(`Listening on port ${port}`));
