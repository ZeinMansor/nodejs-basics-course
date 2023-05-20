import express from 'express';
import mustacheExpress from 'mustache-express';

import router from './routes/router.mjs';

const app = express();

// use public folder as static folder.
app.use(express.static('public'));

// register mustach-express as templating engine
app.engine('html', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', 'public/views')

app.use('/', router);


const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})