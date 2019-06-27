import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @Render('list.hbs')
  listLocations() {
    return this.locationService.list();
  }
}
