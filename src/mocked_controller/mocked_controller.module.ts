import { Module } from '@nestjs/common';
import { MockedControllerService } from './mocked_controller.service';
import { MockedControllerController } from './mocked_controller.controller';

@Module({
  controllers: [MockedControllerController],
  providers: [MockedControllerService],
})
export class MockedControllerModule {}
