import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { GETTER_SERVICE, Getter } from 'src/common/Getter';

type CatResponseType = Array<{ url: string }>;

@Injectable()
export class CatsService {
  constructor(
    @Inject(GETTER_SERVICE)
    private readonly getterService: Getter,
  ) {}

  async getCats() {
    const catsResponse = (await this.getterService.get(
      'https://api.thecatapi.com/v1/images/search?limit=5',
    )) as CatResponseType;

    if (!catsResponse) {
      throw new NotFoundException('Could not found cats');
    }

    return catsResponse
      .slice(0, 5)
      .map((catData: { url: string }) => catData.url);
  }
}
