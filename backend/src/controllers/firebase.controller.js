"use strict";

const { throws } = require("assert");
var fs = require("fs");

const httpStatus = require("http-status");

const firebaseModel = require("../models/userSpecificModels/firebase.model");
const userModel = require("../models/user.model");
const { Addfirebase, Getfirebase, Editfirebase, Deletefirebase } = require("../services/firebase");



exports.saveUserToken = async (req, res, next) => {
  try {
    var token = req.params.token;

    if(!token) throw new Error("Token não recebido");
    var findUser =await userModel.findOne({"firebase.token":token})
    console.log("0")

    if (findUser) {
      findUser.firebase=null
      await findUser.save()
    }
    console.log("1")
    var user =await userModel.findById(req.user.id)
    if (!user) throw new Error("Usuario não encontrado");



    var firebaseEntity = new firebaseModel({token})
    console.log("3")

   user.firebase=firebaseEntity
    console.log("4")

    let u= await user.save()
    console.log("3")


    res.status(httpStatus.OK);
    res.send({result:'ok'});
  } catch (error) {
    console.log(error)
    return next(error);
  }
};
exports.removeUserToken = async (req, res, next) => {
  try {
    const findUser =await userModel.findById(req.user.id)
    console.log(findUser)
    if (findUser) {
      if(!findUser.firebase){
        throw new Error("Usuario sem token");
      }
      findUser.firebase=null
      await findUser.save()
      res.status(httpStatus.OK);
      res.send({result:'ok'});
    }else{

    }


  } catch (error) {
    return next(error);
  }
};
