import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    const logger = new Logger('HTTP');
    logger.log('I am not called');
    return next.handle().pipe(
      tap(() => logger.log('Neither me')),
      catchError((err: any) => {
        logger.log('Neither me 2');
        return throwError(() => err);
      }),
    );
  }
}
