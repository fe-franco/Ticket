"use strict";

var fs = require("fs");

const httpStatus = require("http-status");
const userModel = require("../models/user.model");
const schNotification = require("../models/schNotification.model");
const notificationModel = require("../models/userSpecificModels/notification.model");
const { GetSchNotification, AddSchNotification,CancelSchNotification,SetSentSchNotification} = require("../services/schNotification");

exports.addSchNotificationController = async (req, res, next) => {
  try {
    const schnotification = req.body;
    console.log("OBJETO QUE LLEGA POR SERVICE");
    console.log(schnotification);
    var savedSchnotification = await AddSchNotification(schnotification);
    res.json({ data:  savedSchnotification });
  } catch (error) {
    return next(error);
  }
};




exports.getSchNotificationController = async (req, res, next) => {
  try {
    const idPatient = req.params.id;
    const schNotification = await GetSchNotification(idPatient);

    return res.json({ data:  schNotification });
  } catch (error) {
    next(error);
  }
};





exports.cancelSchNotificationController = async (req, res, next) => {
  try {
    const id = req.params.id;
    await CancelSchNotification(id);
    res.json({ result: "ok" });
  } catch (error) {
    next(error);
  }
};


exports.editnotificationController = async (req, res, next) => {
  try {
    const id = req.params.id;


    var notification = await Editnotification(id,req.body.notification,req.body.image);
    res.status(httpStatus.CREATED);
    return res.json({ data: notification });
  } catch (error) {
    return next(error);
  }
};


exports.sendNotificationController = async (req, res, next) => {
  try {


    const notificationBody = req.body.notification;
    
    await SendNotification(notificationBody);
    res.send({result:'ok'});
  } catch (error) {
    return next(error);
  }
};

