const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Filtering => route starts with /admin/.. go to this file and execute the route inside it
app.use('/admin', adminRoutes);
app.use('/shop',shopRoutes);

//error page
app.use((req, res, next) => {
    res.status(404).send('<h1> Page not found </h1>');
});

app.listen(3000);