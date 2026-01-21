const CustomAPIError = require("./custom-error");
class InternalError extends CustomAPIError {
  constructor(message) {
    super(message);
  }
}

module.exports = InternalError;
