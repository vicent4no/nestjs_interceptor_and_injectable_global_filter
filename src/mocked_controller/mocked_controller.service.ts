import { Injectable } from '@nestjs/common';

@Injectable()
export class MockedControllerService {
  findAll() {
    return `This action returns all mockedController`;
  }
}
