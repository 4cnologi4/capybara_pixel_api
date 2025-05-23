import { Controller, Get, Param } from '@nestjs/common';
import { CapybaraService } from '../../application/services/capybara.service';
import { CapybaraNamesDto, CapybaraFoodDto, CapybaraResponseDto, CapybaraCountriesDto, CapybaraHabitatDto, CapybaraActivitiesDto } from '../../domain/dtos/capybara-response.dto';

@Controller({
    path: 'capybara',
    version: ['1'] // ['1', '2'] // Supports both versions
})

export class CapybaraController {
    constructor(private readonly service: CapybaraService) { }

    /* @Version('1')
    @Get()
    getV1() {
        return { message: 'Legacy v1 response' };
    }

    @Version('2')
    @Get()
    getV2() {
        return { message: 'New v2 response with improvements' };
    } */

    @Get('habitats')
    async getHabits(): Promise<CapybaraHabitatDto[]> {
        return this.service.getHabits();
    }

    @Get('activities')
    async getActivities(): Promise<CapybaraActivitiesDto[]> {
        return this.service.getActivities();
    }

    @Get('food')
    async getFood(): Promise<CapybaraFoodDto[]> {
        return this.service.getFood();
    }

    @Get('countries')
    async getCountries(): Promise<CapybaraCountriesDto[]> {
        return this.service.getCountries();
    }

    @Get('names')
    async getNames(): Promise<CapybaraNamesDto[]> {
        return this.service.getNames();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<CapybaraResponseDto | null> {
        return this.service.getById(id);
    }

} 