import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { GETTER_SERVICE } from '../common/Getter';

describe('DogsController', () => {
  let controller: DogsController;
  let dogsService: DogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
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

    controller = module.get<DogsController>(DogsController);
    dogsService = module.get<DogsService>(DogsService);
  });

  describe('findAll', () => {
    it('should return an array of dogs images', async () => {
      const dogsImages = [
        'https://example.com/dog1.jpg',
        'https://example.com/dog2.jpg',
      ];

      jest.spyOn(dogsService, 'getDogs').mockResolvedValue(dogsImages);

      expect(await controller.findAll()).toBe(dogsImages);
    });
  });
});
