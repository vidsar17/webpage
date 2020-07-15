import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from  '../webpack.config';
import routes from './routes/routes.js';

//inicializacion:
const app = express();

//configurar:
app.set('port', process.env.PORT || 3302);

//middleware:
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(express.json());

//rutas:
app.use(routes);

//run server:
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});

