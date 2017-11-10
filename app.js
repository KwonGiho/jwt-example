/**
 * Created by kwongiho on 2017. 11. 11..
 */
import express from 'express';
import bodyParser from 'body-parser';
import router from './router/router';

//var path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json());

router(app);

app.listen( 3000 , () => console.log('API server starting on PORT ' + 3000));


export default app;