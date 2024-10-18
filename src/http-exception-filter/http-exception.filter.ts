import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ReportInternalExceptionService } from '../report-internal-exception/report-internal-exception.service';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly internal_error_report: ReportInternalExceptionService,
  ) {}
  async catch(exception: HttpException, host: ArgumentsHost) {
    await this.internal_error_report.report(exception);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.json({ message: 'friendly message' });
  }
}
