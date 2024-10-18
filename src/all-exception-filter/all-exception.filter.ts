import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  async catch(exception: Error, host: ArgumentsHost) {
    const logger = new Logger('Critical');
    logger.error(
      `Completely unhandled error, help! ${JSON.stringify(exception)}`,
    );
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.json({ message: 'friendly message, no critical error exposed' });
  }
}
