// index.js
// Importa el paquete de express
let express = require('express');
// Obtiene una instancia de express
let app = express();

// index.js
let bodyParser = require('body-parser');

// ... Otro código que habíamos escrito ...
// Importa las configuraciones
let appRoutes = require('./routes/app');

app.use(bodyParser.urlencoded({ extended: true }));
// Define que configuraciones de rutas se van a utilizar para la ruta
let methodOverride = require('method-override')
// sobreescribe el método POST
app.use(methodOverride('_method'))


app.use('/', appRoutes);

app.use(express.static('css'));
app.use(express.static('img'));

// Configuraciones de las vistas
let exphbs = require('express-handlebars');
// Define la extensión que se va a utilizar para los archivos que representan
// las vistas
const extNameHbs = 'hbs';
// Crea una instancia de hbs con las conifugraciones definidas
let hbs = exphbs.create({extname: extNameHbs});
// Establece el uso de handlebars dentro de express.js
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);



// Importa la configuración de la app
let appConfig = require('./configs/app');



// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(appConfig.express_port,() => {
  let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
  console.log(show);
});