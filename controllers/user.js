const { request, response } = require("express");

const getUser = (req=request, res=response) => {
  res.json({
    msg: "get API ",
  });
};

const postUser = (req=request, res=response) => {
  res.status(201).json({
    msg: "post API ",
  });
};

const putUser = (req=request, res=response) => {
  res.status(200).json({
    msg: "put API ",
  });
};

const deletUser = (req=request, res=response) => {
  res.json({
    msg: "delete API ",
  });
};

const pathcUser = (req=request, res=response) => {
  res.json({
    msg: "patch API ",
  });
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deletUser,
  pathcUser,
};
