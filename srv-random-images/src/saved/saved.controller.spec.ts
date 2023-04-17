import { Test, TestingModule } from '@nestjs/testing';
import { SavedController } from './saved.controller';
import { SavedStateType } from './types';

describe('SavedController', () => {
  let controller: SavedController;
  let savedState: SavedStateType;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavedController],
      providers: [
        {
          provide: 'SAVED_STATE',
          useValue: {
            get: jest.fn(),
            set: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SavedController>(SavedController);
    savedState = module.get<SavedStateType>('SAVED_STATE');
  });

  describe('findAll', () => {
    it('should return an empty array if there are no saved images for the user', () => {
      (<jest.Mock>savedState.get).mockReturnValue(undefined);
      const result = controller.findAll('user123');
      expect(result).toEqual([]);
    });

    it('should return an array of saved images for the user', () => {
      (<jest.Mock>savedState.get).mockReturnValue(
        new Set(['image1.jpg', 'image2.jpg']),
      );
      const result = controller.findAll('user123');
      expect(result).toEqual(['image1.jpg', 'image2.jpg']);
    });
  });

  describe('create', () => {
    it("should add the image to the user's saved images", () => {
      (<jest.Mock>savedState.get).mockReturnValue(new Set(['image1.jpg']));
      controller.create('image2.jpg', 'user123');
      expect(savedState.set).toHaveBeenCalledWith(
        'user123',
        new Set(['image1.jpg', 'image2.jpg']),
      );
    });
  });

  describe('remove', () => {
    it("should remove the image from the user's saved images", () => {
      (<jest.Mock>savedState.get).mockReturnValue(
        new Set(['image1.jpg', 'image2.jpg']),
      );
      controller.remove('image1.jpg', 'user123');
      expect(savedState.set).toHaveBeenCalledWith(
        'user123',
        new Set(['image2.jpg']),
      );
    });
  });
});
