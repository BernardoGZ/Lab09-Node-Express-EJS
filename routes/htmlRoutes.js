// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  let quer, clear ;
  // const nom = false;
  
  app.get("/tables", function(req, res) {
    quer = true;
    clear = true;
    res.render('pages/tables', {quer, clear});
  });

  app.get("/reserve", function(req, res) {
    quer = true;
    clear = true;
    res.render('pages/reserve', {quer, clear});
  });

  // If no matching route is found default to home. Using EJS now
  app.get("*", function(req, res) {
    quer = false;
    clear = false;
    res.render('pages/home', {quer, clear});
  });
};
