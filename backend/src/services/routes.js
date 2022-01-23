var fs = require("fs");
const uuidv4 = require("uuid/v4");
const routesModel = require("../models/roleSystem/routes.model");
const { startOfDay, endOfDay } = require("date-fns");

exports.Getroutes = async function (query, page, limit) {
  try {
    var routes = await routesModel.find(query);
    return routes;
  } catch (e) {
    // Log Errors
    throw Error("Error while fetching routes");
  }
};

exports.Addroutes = async function (routesObj, image=null) {
  try {
    const routes = new routesModel(routesObj);
    const savedroutes = await routes.save();
    return savedroutes;
  } catch (e) {
    throw Error(e);
  }
};

exports.Deleteroutes = async function (id, routesObj) {
  try {
    var routes = await routesModel.findByIdAndDelete(id);
    return routes
  } catch (e) {
    // Log Errors
    throw Error("Error while deleting routes");
  }
};

exports.Editroutes = async function (id, routesObj, image = null) {
  try {
     if (image) {
 var routes_TITLE = routesObj.title?routesObj.title:""
      
      var imageBuffer = await decodeBase64Image(image.base64);
      const title =
      routes_TITLE.replace(/[^A-Z0-9]+/gi, "_") + "_" + uuidv4() + ".jpg";
      fs.writeFile("./img/" + title, imageBuffer.data, function (done) {
        console.warn(done, "DONE");
      });
      routesObj.thumbnail = title;
        }
    var routes = await routesModel.findByIdAndUpdate(id,routesObj);
    return routes
    
  } catch (e) {
    // Log Errors
    throw Error("Error while editing routes");
  }
};
