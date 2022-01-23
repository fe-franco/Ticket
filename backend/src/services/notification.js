var fs = require("fs");
const uuidv4 = require("uuid/v4");
const notificationModel = require("../models/userSpecificModels/notification.model");
const { startOfDay, endOfDay } = require("date-fns");
const serviceCall = require("./ExternalApiCall");
const config = require("./../config");
exports.Getnotification = async function (query, page, limit) {
  try {
    var notification = await notificationModel.find(query);
    return notification;
  } catch (e) {
    // Log Errors
    throw Error("Error while fetching notification");
  }
};

exports.Addnotification = async function (notificationObj) {
  try {
    const notification = new notificationModel(notificationObj);
    const savednotification = await notification.save();
    return savednotification;
  } catch (e) {
    throw Error(e);
  }
};

exports.Deletenotification = async function (id, notificationObj) {
  try {
    var notification = await notificationModel.findByIdAndDelete(id);
    return notification;
  } catch (e) {
    // Log Errors
    throw Error("Error while deleting notification");
  }
};

exports.Editnotification = async function (id, notificationObj, image = null) {
  try {
    if (image) {
      var notification_TITLE = notificationObj.title
        ? notificationObj.title
        : "";

      var imageBuffer = await decodeBase64Image(image.base64);
      const title =
        notification_TITLE.replace(/[^A-Z0-9]+/gi, "_") +
        "_" +
        uuidv4() +
        ".jpg";
      fs.writeFile("./img/" + title, imageBuffer.data, function (done) {
        console.warn(done, "DONE");
      });
      notificationObj.thumbnail = title;
    }
    var notification = await notificationModel.findByIdAndUpdate(
      id,
      notificationObj
    );
    return notification;
  } catch (e) {
    // Log Errors
    throw Error("Error while editing notification");
  }
};

exports.SendNotification = async function (notification, data = {}) {
  try {
    const notificationData = {
      to: "/topics/delivery-free",
      priority: "high",
      notification: {
        body: notification.body,
        title: notification.title,
        sound: "default",
        android_channel_id: "500",
      },
      data,
    };

    const nObj = new notificationModel(notificationData);
    await nObj.save();

    let request = serviceCall.serverCallPost(
      "",
      config.firebase.key,
      notificationData,
      "",
      config.firebase.uri
    );

    return request;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error(e);
  }
};


exports.SendNotificationDor = async function (token, data = {}) {
  try {
    const notificationData = {
      to: token,
      priority: "high",
      notification: {
        body: "Ainda não completou seu diario da dor.",
        title: "Diario Dor",
        sound: "default",
        android_channel_id: "500",
      },
      data,
    };

    const nObj = new notificationModel(notificationData);
    await nObj.save();

    let request =  await serviceCall.serverCallPost(
      "",
      config.firebase.key,
      notificationData,
      "",
      config.firebase.uri
    );

    return request;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error(e);
  }
};


exports.SendNotificationRedecta = async function (token, data = {}) {
  try {
    const notificationData = {
      to: token,
      priority: "high",
      notification: {
        body: "Você recebeu uma receita",
        title: "Nova Receita Médica",
        sound: "default",
        android_channel_id: "500",
      },
      data,
    };

    const nObj = new notificationModel(notificationData);
    await nObj.save();

    let request =  await serviceCall.serverCallPost(
      "",
      config.firebase.key,
      notificationData,
      "",
      config.firebase.uri
    );

    return request;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error(e);
  }
};

exports.SendSchNotification = async function (token,data) {
  try {
    const notificationData = {
      to: token,
      priority: "high",
      notification: {
        body: data.body,
        title: data.title,
        sound: "default",
        android_channel_id: "500",
      },
      data,
    };

    const nObj = new notificationModel(notificationData);
    await nObj.save();

    let request =  await serviceCall.serverCallPost(
      "",
      config.firebase.key,
      notificationData,
      "",
      config.firebase.uri
    );

    return request;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error(e);
  }
};


exports.SendDosageNotification = async function (token,data) {
  try {
    const notificationData = {
      to: token,
      priority: "high",
      notification: {
        body: data.body,
        title: data.title,
        sound: "default",
        android_channel_id: "500",
      },
      data,
    };

    const nObj = new notificationModel(notificationData);
    await nObj.save();

    let request =  await serviceCall.serverCallPost(
      "",
      config.firebase.key,
      notificationData,
      "",
      config.firebase.uri
    );

    return request;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error(e);
  }
};