import { HttpException, Injectable, Logger } from '@nestjs/common';
import { sleep } from '../utils/sleep';

@Injectable()
export class ReportInternalExceptionService {
  logger: Logger = new Logger('Exception');

  async report(exception: HttpException) {
    this.logger.error(`reporting... ${JSON.stringify(exception)}`);
    await sleep(1000);
  }
}
