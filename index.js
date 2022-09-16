let express = require('express');

let app = express();

let appRoutes = require('./routes/app');

app.use('/', appRoutes);

let exphbs = require('express-handlebars');

const extNameHbs = 'hbs';

let hbs = exphbs.create({extname: extNameHbs});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.listen(3000, () => {
    console.log('App listening on port 3000! (http://localhost:3000)');
});