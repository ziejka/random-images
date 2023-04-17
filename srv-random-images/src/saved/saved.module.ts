import { Module } from '@nestjs/common';
import { SavedController } from './saved.controller';
import { SavedStateType } from './types';

@Module({
  controllers: [SavedController],
  providers: [
    {
      provide: 'SAVED_STATE',
      useValue: <SavedStateType>new Map(),
    },
  ],
  exports: ['SAVED_STATE'],
})
export class SavedModule {}
