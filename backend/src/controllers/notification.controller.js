"use strict";

var fs = require("fs");

const httpStatus = require("http-status");
const userModel = require("../models/user.model");
const notificationModel = require("../models/userSpecificModels/notification.model");
const { Addnotification, Getnotification, Editnotification, Deletenotification,SendNotification } = require("../services/notification");

exports.addnotificationController = async (req, res, next) => {
  try {
    const notification = req.body.notification;
    var savednotification = await Addnotification(notification);
    res.status(httpStatus.CREATED);
    res.send(savednotification.transform());
  } catch (error) {
    return next(error);
  }
};




exports.getnotificationController = async (req, res, next) => {
  try {
    const notification = await Getnotification();

    return res.json({ data:  notification });
  } catch (error) {
    next(error);
  }
};





exports.deletenotificationController = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Deletenotification(id);
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
