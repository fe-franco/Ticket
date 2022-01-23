"use strict";
const fetch = require("node-fetch");
exports.getAutoComplete = async (req, res, next) => {
  try {
    let adress = req.params.adress;
    if (adress.length < 3) return res.json([]);

    let request = await fetch(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" +
        adress +
        "&inputtype=textquery&fields=formatted_address,name&key=KEY"
    );
    let result = await request.json();
    let response = result.predictions || [];

    return res.json(response);
  } catch (error) {
    next(error);
  }
};

exports.getWaypoints = async (req, res, next) => {
  try {
    let { origin, destination } = req.params;

    let request = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${origin}&destination=place_id:${destination}&key=KEY`
    );
    let result = await request.json();
    if (!result || result.status == "ZERO_RESULTS") {
      throw new Error("Nada foi encontrado");
    }
    return res.json(result);
  } catch (error) {
    next(error);
  }
};
exports.getPlaceById = async (req, res, next) => {
  try {
    let placeId = req.params.placeId;

    let request = await fetch(
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +
        placeId +
        "&fields=geometry&key=KEY"
    );
    let result = await request.json();
    if (!result || !result.result) {
      throw new Error("Place ID incorreto");
    }
    return res.json(result.result.geometry);
  } catch (error) {
    next(error);
  }
};
