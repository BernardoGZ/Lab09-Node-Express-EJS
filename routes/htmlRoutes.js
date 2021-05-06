// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //Variable if clear lists is needed or not. 
  let quer, clear ;
  // const nom = false;
  
  //Tables ya no requiere jQuery
  app.get("/tables", function(req, res) {
    quer = false;
    clear = true;
    res.render('pages/tables', {quer, clear, tableData, waitListData});
  });

  //Reservaciones todavia requiere jquery para mandar informacion
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
