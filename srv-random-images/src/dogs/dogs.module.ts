import { Module } from '@nestjs/common';
import { AxiosService } from 'src/axiosService/axios.service';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { GETTER_SERVICE } from 'src/common/Getter';

@Module({
  controllers: [DogsController],
  providers: [DogsService, { useClass: AxiosService, provide: GETTER_SERVICE }],
})
export class DogsModule {}
