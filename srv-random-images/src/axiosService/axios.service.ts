import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Getter } from 'src/common/Getter';

@Injectable()
export class AxiosService implements Getter {
  async get(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      console.log(e.code);
    }
  }
}
