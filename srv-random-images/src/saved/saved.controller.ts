import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { SavedStateType } from './types';

@Controller('saved')
export class SavedController {
  constructor(@Inject('SAVED_STATE') private saveState: SavedStateType) {}

  @Get(':userID')
  findAll(@Param('userID') userID: string) {
    return Array.from(this.saveState.get(userID) || []);
  }

  @Post(':userID')
  create(@Body('imageUrl') imageUrl: string, @Param('userID') userID: string) {
    const savedForUser = this.saveState.get(userID) || new Set();
    savedForUser.add(imageUrl);

    this.saveState.set(userID, savedForUser);
  }

  @Delete(':userID')
  remove(@Body('imageUrl') imageUrl: string, @Param('userID') userID: string) {
    const savedForUser = this.saveState.get(userID) || new Set();
    savedForUser.delete(imageUrl);

    this.saveState.set(userID, savedForUser);
  }
}
