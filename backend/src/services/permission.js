var fs = require("fs");
const uuidv4 = require("uuid/v4");
const { startOfDay, endOfDay } = require("date-fns");
const permissionModel = require("../models/roleSystem/permission.model");

exports.GetPermission = async function (query, page, limit) {
  try {
    var permission = await permissionModel.find(query);
    return permission;
  } catch (e) {
    // Log Errors
    throw Error("Error while fetching permission");
  }
};

exports.AddPermission = async function (permissionObj, image=null) {
  try {
    const permission = new permissionModel(permissionObj);
    const savedPermission= await permission.save();
    return savedPermission;
  } catch (e) {
    throw Error(e);
  }
};

exports.DeletePermission = async function (id, permissionObj) {
  try {
    var permission = await permissionModel.findByIdAndDelete(id);
    return permission
  } catch (e) {
    // Log Errors
    throw Error("Error while deleting permission");
  }
};



exports.EditPermission = async function (id, permissionObj, image = null) {
  try {
     if (image) {
 var permission_TITLE = permissionObj.title?permissionObj.title:""
      
      var imageBuffer = await decodeBase64Image(image.base64);
      const title =
      permission_TITLE.replace(/[^A-Z0-9]+/gi, "_") + "_" + uuidv4() + ".jpg";
      fs.writeFile("./img/" + title, imageBuffer.data, function (done) {
        console.warn(done, "DONE");
      });
      permissionObj.thumbnail = title;
        }
    var permission = await permissionModel.findByIdAndUpdate(id,permissionObj);
    return permission
    
  } catch (e) {
    // Log Errors
    throw Error("Error while editing permission");
  }
};
