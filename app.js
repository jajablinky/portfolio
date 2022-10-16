const express = require('express');
const app = express();


app.use('/static', express.static('public'));

app.set('view engine' , 'pug');

const mainRoutes = require('./routes');
const projectsRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectsRoutes);

app.use((req, res, next) => {
    res.status(404).render('not-found');
    
  });
  /* Global error handler */
  
  app.use((err, req, res, next) =>{
  
    if (err) {
      console.log('Global error handler called', err);
    }
  
    if (err.status === 404){
      res.status = '404'.render = ('not-found', { err });
    } else {
      err.message = err.message || 'Oops! It looks like something went wrong with the server'
      res.status(err.status || 500).render('error', { err });
    }
  });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});