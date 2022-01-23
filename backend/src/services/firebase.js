var fs = require("fs");
const uuidv4 = require("uuid/v4");
const firebaseModel = require("../models/userSpecificModels/firebase.model");
const { startOfDay, endOfDay } = require("date-fns");

exports.Getfirebase = async function (query, page, limit) {
  try {
    var firebase = await firebaseModel.find(query);
    return firebase;
  } catch (e) {
    // Log Errors
    throw Error("Error while fetching firebase");
  }
};

exports.Addfirebase = async function (firebaseObj, image=null) {
  try {
    const firebase = new firebaseModel(firebaseObj);
    const savedfirebase = await firebase.save();
    return savedfirebase;
  } catch (e) {
    throw Error(e);
  }
};

exports.Deletefirebase = async function (id, firebaseObj) {
  try {
    var firebase = await firebaseModel.findByIdAndUpdate(id,{isActive:false});
    return firebase
  } catch (e) {
    // Log Errors
    throw Error("Error while deleting firebase");
  }
};

exports.Editfirebase = async function (id, firebaseObj, image = null) {
  try {
     if (image) {
 var firebase_TITLE = firebaseObj.title?firebaseObj.title:""
      
      var imageBuffer = await decodeBase64Image(image.base64);
      const title =
      firebase_TITLE.replace(/[^A-Z0-9]+/gi, "_") + "_" + uuidv4() + ".jpg";
      fs.writeFile("./img/" + title, imageBuffer.data, function (done) {
        console.warn(done, "DONE");
      });
      firebaseObj.thumbnail = title;
        }
    var firebase = await firebaseModel.findByIdAndUpdate(id,firebaseObj);
    return firebase
    
  } catch (e) {
    // Log Errors
    throw Error("Error while editing firebase");
  }
};
