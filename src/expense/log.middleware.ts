import {  NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class LogMiddleware implements NestMiddleware {
  private logger = new Logger('LogMiddleware')

  use(req: Request, res: Response, next: NextFunction) {
    const userAgent = req.headers['user-agent'];
    console.log(`user agent: ${userAgent}`)
    this.logger.log(`user agent: ${userAgent}`)
    next()
  }
}