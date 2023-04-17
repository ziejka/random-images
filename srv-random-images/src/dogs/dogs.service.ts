import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { GETTER_SERVICE, Getter } from '../common/Getter';

type DogsResponseType = { status: string; message: string[] };

@Injectable()
export class DogsService {
  constructor(
    @Inject(GETTER_SERVICE)
    private readonly getterService: Getter,
  ) {}

  async getDogs(): Promise<string[]> {
    const dogs = (await this.getterService.get(
      'https://dog.ceo/api/breeds/image/random/5',
    )) as DogsResponseType;

    if (!dogs || dogs.status !== 'success') {
      throw new NotFoundException('Could not found dogs');
    }
    return dogs.message;
  }
}
