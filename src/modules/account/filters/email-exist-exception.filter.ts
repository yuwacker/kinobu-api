import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailExistExceptionFilter extends HttpException {
  constructor() {
    super('This email address is already in use', HttpStatus.BAD_REQUEST);
  }
}
