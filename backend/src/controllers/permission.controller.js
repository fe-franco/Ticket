"use strict";

var fs = require("fs");

const httpStatus = require("http-status");

const { AddPermission, GetPermission, EditPermission, DeletePermission } = require("../services/permission");

exports.addPermissionController = async (req, res, next) => {
  try {
    const permission = req.body;
    var savedPermission = await AddPermission(permission);
    res.status(httpStatus.CREATED);
    res.send(savedPermission.transform());
  } catch (error) {
    return next(error);
  }
};


exports.getPermissionController = async (req, res, next) => {
  try {
    const permission = await GetPermission();
    
    return res.json({ data:  permission });
  } catch (error) {
    next(error);
  }
};





exports.deletePermissionController = async (req, res, next) => {
  try {
    const id = req.params.id;
    await DeletePermission(id);
    res.json({ result: "ok" });
  } catch (error) {
    next(error);
  }
};


exports.editPermissionController = async (req, res, next) => {
  try {
    const id = req.params.id;
    

    var permission = await EditPermission(id,req.body.permission,req.body.image);
    res.status(httpStatus.CREATED);
    return res.json({ data: permission });
  } catch (error) {
    return next(error);
  }
};

