class ResponseType {
  constructor(data) {
    this.data = data;
  }

  success() {
    this.message = "Internal Server Success";
    this.code = 200;
    return this;
  }

  error() {
    this.message = "Internal Server Error";
    this.code = 404;
    return this;
  }
}

module.exports = ResponseType;
