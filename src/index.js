const express = require('express');
const app = express();
const morgan = require('morgan');

// configuraciones
app.set('port', process.env.port || 3000);
app.set('json spaces', 2)

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/routes'));
app.use('/api/movies',require('./routes/movie'));



//empezanod el server
app.listen(app.get('port'), () =>{

    console.log(`server on port ${app.get('port')}`);

}); 