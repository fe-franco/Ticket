"use strict";

var fs = require("fs");

const httpStatus = require("http-status");

const routesModel = require("../models/roleSystem/routes.model");
const { Addroutes, Getroutes, Editroutes, Deleteroutes } = require("../services/routes");

exports.addroutesController = async (req, res, next) => {
  try {
    const routes = req.body;
    var savedroutes = await Addroutes(routes);
    res.status(httpStatus.CREATED);
    res.send(savedroutes.transform());
  } catch (error) {
    return next(error);
  }
};




exports.getroutesController = async (req, res, next) => {
  try {
    const routes = await Getroutes();
    
    return res.json({ data:  routes });
  } catch (error) {
    next(error);
  }
};





exports.deleteroutesController = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Deleteroutes(id);
    res.json({ result: "ok" });
  } catch (error) {
    next(error);
  }
};


exports.editroutesController = async (req, res, next) => {
  try {
    const id = req.params.id;
    

    var routes = await Editroutes(id,req.body.routes,req.body.image);
    res.status(httpStatus.CREATED);
    return res.json({ data: routes });
  } catch (error) {
    return next(error);
  }
};

