import { Controller, Get } from '@nestjs/common';
import { MockedControllerService } from './mocked_controller.service';

@Controller('mocked-controller')
export class MockedControllerController {
  constructor(
    private readonly mockedControllerService: MockedControllerService,
  ) {}

  @Get()
  findAll() {
    return this.mockedControllerService.findAll();
  }
}
