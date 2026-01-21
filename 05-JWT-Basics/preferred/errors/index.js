const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const UnauthenticatedError = require("./unauthenticated");
const InternalError = require("./internal-error");

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
  InternalError,
};
