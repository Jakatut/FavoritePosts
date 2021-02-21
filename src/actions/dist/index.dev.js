"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionsTypes = require("constants/ActionTypes");

//@flow
var addFavorite = function addFavorite(payload) {
  return {
    type: _actionsTypes.ADD_FAVORITE,
    payload: payload
  };
};

var getFavorites = function getFavorites(payload) {
  return {
    type: _actionsTypes.GET_FAVORITES,
    payload: payload
  };
};

var clearFavorites = function clearFavorites(payload) {
  return {
    type: _actionsTypes.CLEAR_FAVORITES,
    payload: payload
  };
};

var openFavorites = function openFavorites(payload) {
  return {
    type: _actionsTypes.OPEN_FAVORITES,
    payload: payload
  };
};

var allActions = {
  addFavorite: addFavorite,
  getFavorites: getFavorites,
  clearFavorites: clearFavorites,
  openFavorites: openFavorites
};
var _default = allActions;
exports["default"] = _default;