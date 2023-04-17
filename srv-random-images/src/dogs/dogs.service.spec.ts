import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { GETTER_SERVICE, Getter } from '../common/Getter';
import { DogsService } from './dogs.service';

describe('DogsService', () => {
  let dogsService: DogsService;
  let getterService: Getter;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        DogsService,
        {
          provide: GETTER_SERVICE,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    dogsService = moduleRef.get<DogsService>(DogsService);
    getterService = moduleRef.get<Getter>(GETTER_SERVICE);
  });

  describe('getDogs', () => {
    it('should return an array of dog images', async () => {
      const mockedDogsResponse = {
        status: 'success',
        message: ['dog1', 'dog2', 'dog3'],
      };

      // Mock the behavior of the `get` method from the `getterService`
      (getterService.get as jest.Mock).mockResolvedValue(mockedDogsResponse);

      const result = await dogsService.getDogs();

      expect(result).toEqual(mockedDogsResponse.message);
      expect(getterService.get).toHaveBeenCalledWith(
        'https://dog.ceo/api/breeds/image/random/5',
      );
    });

    it('should throw a NotFoundException when the response is not successful', async () => {
      const mockedErrorResponse = {
        status: 'error',
        message: ['Could not fetch dogs'],
      };

      (getterService.get as jest.Mock).mockResolvedValue(mockedErrorResponse);

      await expect(dogsService.getDogs()).rejects.toThrowError(
        new NotFoundException('Could not found dogs'),
      );
    });
  });
});
