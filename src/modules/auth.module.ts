import '../env';
import { Module, HttpModule } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AuthService } from '@services';
import { AuthController } from '@controllers';
import { clientOptions } from '../client';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        ...clientOptions,
      },
    ]),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}