import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from '../http-exception-filter/http-exception.filter';
import { ReportInternalExceptionService } from '../report-internal-exception/report-internal-exception.service';

@Module({
  providers: [
    ReportInternalExceptionService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class GlobalFiltersModule {}
