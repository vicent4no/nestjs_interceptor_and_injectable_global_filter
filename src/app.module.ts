import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalFiltersModule } from './global_filters/global_filters.module';
import { MockedControllerModule } from './mocked_controller/mocked_controller.module';

@Module({
  imports: [GlobalFiltersModule, MockedControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
