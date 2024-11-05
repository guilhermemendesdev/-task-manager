import HttpStatus from "http-status";

class Util {
  create(result: any, message: string): any {
    return {
      result,
      message,
      status: HttpStatus.OK,
    };
  }

  getAll(result: any): any {
    return {
      result,
      status: HttpStatus.OK,
    };
  }
}

export default new Util();
