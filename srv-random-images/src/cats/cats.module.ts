import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AxiosService } from 'src/axiosService/axios.service';
import { GETTER_SERVICE } from 'src/common/Getter';

@Module({
  controllers: [CatsController],
  providers: [CatsService, { useClass: AxiosService, provide: GETTER_SERVICE }],
})
export class CatsModule {}
