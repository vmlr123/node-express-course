const CustomAPIError = require("./custom-error");
class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
  }
}

module.exports = BadRequest;
