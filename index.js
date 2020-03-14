const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const loginRoute = require('./routers/loginR')
const artistRoute = require('./routers/artists')

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use(loginRoute);
app.use(artistRoute);

app.get('/',(req,res,next)=>{
    return res.redirect(301,'/login');
});

app.listen(process.env.PORT || 3000,()=>console.log('Server ready'));