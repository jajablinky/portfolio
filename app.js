const express = require('express');
const app = express();


app.use('/static', express.static('public'));

app.set('view engine' , 'pug');

const mainRoutes = require('./routes');
const projectsRoutes = require('./routes/projects');

/* routed from /routes folder
*/

app.use(mainRoutes);
app.use('/projects', projectsRoutes);


/* error handling 404 -- if 404 template 'not-found' is rendered
if 500 it renders 'error'
*/
app.use(( req, res, next) => {
    const err = new Error("Sorry, cannot find page");
    err.status = 404;
    next(err);
  });
  
app.use((err,req,res,next)=>{
  res.status(err.status || 500); 
  if (err.status === 404){ 
      res.render('not-found',{
          err: {
              status : err.status,
              message: err.message,
              stack: err.stack
          }})
  } else {
      err.status =  500
      err.message = "An error is occured."
      res.render('error',{
          err: {
              status : err.status,
              message: err.message,
              stack: err.stack
          }
      })
  }
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});