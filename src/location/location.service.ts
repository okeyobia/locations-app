import { Injectable } from '@nestjs/common';
import { ILocationsDTO } from './ilocationDTO';

@Injectable()
export class LocationService {
  list(): ILocationsDTO {
    return {
      locations: ['location 1', 'location 2', 'location 3', 'location 4'],
    };
  }
}
