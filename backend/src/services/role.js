var fs = require("fs");
const uuidv4 = require("uuid/v4");
const roleModel = require("../models/roleSystem/role.model");
const { startOfDay, endOfDay } = require("date-fns");
const permissionModel = require("../models/roleSystem/permission.model");
const routesModel = require("../models/roleSystem/routes.model");

exports.Getrole = async function (query, page, limit) {
  try {
    var role = await roleModel.find(query).populate("permissions");
    return role;
  } catch (e) {
    // Log Errors
    throw Error("Error while fetching role");
  }
};

exports.Addrole = async function (roleObj, image=null) {
  try {
    const role = new roleModel(roleObj);
    const savedrole = await role.save();
    return savedrole;
  } catch (e) {
    throw Error(e);
  }
};

exports.Deleterole = async function (id, roleObj) {
  try {
    var role = await roleModel.findByIdAndDelete(id);
    return role
  } catch (e) {
    // Log Errors
    throw Error("Error while deleting role");
  }
};


exports.AddPermissionToRole=async function (idRole,idPermission){
  try {
    var role = await roleModel.findById(idRole);
    var permission = await permissionModel.findById(idPermission);
    role.permissions.push(permission);
    role.save();
    return role
  } catch (e) {
    // Log Errors
    throw Error("Error while adding permission to role");
  }
}

exports.AddRouteToRole=async function (idRole,idRoute){
  try {
    var role = await roleModel.findById(idRole);
    var route = await routesModel.findById(idRoute);
    role.routes.push(route);
    role.save();
    return role
  } catch (e) {
    // Log Errors
    throw Error("Error while adding route to role");
  }
}



exports.Editrole = async function (id, roleObj, image = null) {
  try {
     if (image) {
 var role_TITLE = roleObj.title?roleObj.title:""
      
      var imageBuffer = await decodeBase64Image(image.base64);
      const title =
      role_TITLE.replace(/[^A-Z0-9]+/gi, "_") + "_" + uuidv4() + ".jpg";
      fs.writeFile("./img/" + title, imageBuffer.data, function (done) {
        console.warn(done, "DONE");
      });
      roleObj.thumbnail = title;
        }
    var role = await roleModel.findByIdAndUpdate(id,roleObj);
    return role
    
  } catch (e) {
    // Log Errors
    throw Error("Error while editing role");
  }
};
