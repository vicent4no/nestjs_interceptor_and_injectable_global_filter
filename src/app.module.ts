import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalFiltersModule } from './global_filters/global_filters.module';

@Module({
  imports: [GlobalFiltersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
