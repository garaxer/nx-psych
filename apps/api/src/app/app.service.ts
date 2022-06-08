import { Injectable } from '@nestjs/common';
import type { Foo } from '@nx-psych/shared-types';
@Injectable()
export class AppService {
  getData(): Foo {
    return { message: 'Welcome to api!' };
  }
}
