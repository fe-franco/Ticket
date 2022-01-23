var fs = require("fs");

const schNotificationModel = require("../models/schNotification.model");


const {SendSchNotification} = require('./notification')
const userModel = require("../models/user.model");
exports.GetSchNotification = async function (patientId) {
  try {
    var notifications = await schNotificationModel.find({to:patientId});
    return notifications;
  } catch (e) {
    // Log Errors
    throw Error("Error while fetching notification");
  }
};

exports.AddSchNotification = async function (schNotificationObj) {
  try {
    let schNotification = new schNotificationModel(schNotificationObj);

    //["edu","preop","posop","nps","eva"];
    /*let startDate=new Date();//
    let endDate = new Date();//
    endDate.setDate(endDate.getDate() + 10); //CAMBIAR PARA QUE LLEGUEN POR SERVICIO
    schNotification.startDate = startDate;//
    schNotification.endDate = endDate;*/
    schNotification.nextDate= schNotificationObj.startDate;
    switch (schNotification.type) {
      case "edu": {
         schNotification.title=""+schNotification.title;
         schNotification.body=""+schNotification.body
      } break;
      case "preop": {
        schNotification.title=""+schNotification.title;
        schNotification.body=""+schNotification.body
      }
        break;
      case "posop": {
        schNotification.title=""+schNotification.title;
        schNotification.body=""+schNotification.body
      }
        break;
      case "nps": {
        schNotification.title=""+schNotification.title;
        schNotification.body=""+schNotification.body
      }
        break;
      case "eva": {
        schNotification.title=""+schNotification.title;
        schNotification.body=""+schNotification.body
      }
        break;
    }

    const savednotification = await schNotification.save();
    return savednotification;
  } catch (e) {
    throw Error(e);
  }
};

exports.CancelSchNotification = async function (id) {
  try {
    var schNotification = await schNotificationModel.findById(id);
    schNotification.canceled = true;
    schNotification.save();

    return schNotification;
  } catch (e) {
    // Log Errors
    console.log(e);
    console.log("CANT CANCEL NOTIFICATION")
    throw Error("Error while canceling notification");
  }
};


exports.SetSentSchNotification = async function (id) {
  try {
    var schNotification = await schNotificationModel.findById(id);
    schNotification.sent = true;
    return schNotification;
  } catch (e) {
    // Log Errors
    throw Error("Error while canceling notification");
  }
};


exports.sendScheduledNotifications =  async function () {
  var schNotifications=await schNotificationModel.find({canceled:false,sent:false})
  console.log("notification DEL SCH NOTIFICATION");
 
  
 
  let minDate= new Date();
  minDate.setHours(minDate.getHours()-1)
  let maxDate= new Date();
  maxDate.setHours(maxDate.getHours()+1)
  console.log(minDate);
  console.log(maxDate);
  for(let i=0;i<schNotifications.length;i++){

    if(new Date(schNotifications[i].nextDate).getTime()>minDate&&new Date(schNotifications[i].nextDate).getTime()<maxDate){
      console.log(schNotifications[i])
      var patient = await userModel.findById(schNotifications[i].to);

      if(patient.firebase)
      {SendSchNotification(patient.firebase.token,schNotifications[i])}
        
      let nextDate=new Date(schNotifications[i].nextDate);
      nextDate.setDate(nextDate.getDate()+schNotifications[i].frequency);
      schNotifications[i].nextDate=nextDate;
      if(new Date(schNotifications[i].nextDate).getTime()>new Date(schNotifications[i].endDate).getTime()){
        schNotifications[i].sent=true;
      }
      //schNotifications[i].sent=true;
      schNotifications[i].save();
    }
  //
    
  
  }
 
};

