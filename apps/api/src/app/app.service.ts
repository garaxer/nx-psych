import { Injectable } from '@nestjs/common';
import { FooDto } from '../dtos/Foo.dto';

@Injectable()
export class AppService {
  getData(): FooDto {
    return { message: 'Welcome to api!' };
  }
}
