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

    // Catalog endpoints (static paths first)
    @Get('names')
    async getAllNames() {
        return this.service.getAllNames();
    }

    @Get('countries')
    async getAllCountries() {
        return this.service.getAllCountries();
    }

    @Get('habitats')
    async getAllHabitats() {
        return this.service.getAllHabitats();
    }

    @Get('activities')
    async getAllActivities() {
        return this.service.getAllActivities();
    }

    @Get('food')
    async getAllFood() {
        return this.service.getAllFood();
    }

    // Single resource endpoints (parameterized paths after)
    @Get('names/:id')
    async getNameById(@Param('id') id: string) {
        return this.service.getNameById(parseInt(id));
    }

    @Get('countries/:id')
    async getCountryById(@Param('id') id: string) {
        return this.service.getCountryById(parseInt(id));
    }

    @Get('habitats/:id')
    async getHabitatById(@Param('id') id: string) {
        return this.service.getHabitatById(parseInt(id));
    }

    @Get('activities/:id')
    async getActivityById(@Param('id') id: string) {
        return this.service.getActivityById(parseInt(id));
    }

    @Get('food/:id')
    async getFoodById(@Param('id') id: string) {
        return this.service.getFoodById(parseInt(id));
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<CapybaraResponseDto | null> {
        return this.service.getById(id);
    }
} 