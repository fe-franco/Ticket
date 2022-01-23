"use strict";

var fs = require("fs");

const httpStatus = require("http-status");

const roleModel = require("../models/roleSystem/role.model");
const { Addrole, Getrole, Editrole, Deleterole,AddPermissionToRole,AddRouteToRole} = require("../services/role");

exports.addroleController = async (req, res, next) => {
  try {
    const role = req.body;
    var savedrole = await Addrole(role);
    res.status(httpStatus.CREATED);
    res.send(savedrole.transform());
  } catch (error) {
    return next(error);
  }
};


exports.addPermissionToRole = async (req, res, next) => {
  try {
    const idR = req.body.roleId;
    const idP = req.body.permissionId;

    var role = await AddPermissionToRole(idR,idP);
    res.status(httpStatus.CREATED);
    return res.json({ data: role });
  } catch (error) {
    return next(error);
  }
};

exports.addRouteToRole = async (req, res, next) => {
  try {
    const idRole = req.body.roleId;
    const idRoute = req.body.routeId;

    var role = await AddRouteToRole(idRole,idRoute);
    res.status(httpStatus.CREATED);
    return res.json({ data: role });
  } catch (error) {
    return next(error);
  }
};

exports.getroleController = async (req, res, next) => {
  try {
    const role = await Getrole();
    
    return res.json({ data:  role });
  } catch (error) {
    next(error);
  }
};





exports.deleteroleController = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Deleterole(id);
    res.json({ result: "ok" });
  } catch (error) {
    next(error);
  }
};


exports.editroleController = async (req, res, next) => {
  try {
    const id = req.params.id;
    

    var role = await Editrole(id,req.body.role,req.body.image);
    res.status(httpStatus.CREATED);
    return res.json({ data: role });
  } catch (error) {
    return next(error);
  }
};

