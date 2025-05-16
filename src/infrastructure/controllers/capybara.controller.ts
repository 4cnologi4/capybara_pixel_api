import { Controller, Get, Query } from '@nestjs/common';
import { CapybaraService } from '../../application/services/capybara.service';
import { CapybaraFoodDto, CapybaraHabitsDto, CapybaraResponseDto, CapybaraCountriesDto } from '../../domain/dtos/capybara-response.dto';

@Controller('capybara')
export class CapybaraController {
    constructor(private readonly service: CapybaraService) { }

    @Get()
    async getCapybara(@Query('type') type: '2d' | '3d' = '2d'): Promise<CapybaraResponseDto> {
        return this.service.getCapybara(type);
    }

    @Get('habits')
    async getHabits(): Promise<CapybaraHabitsDto> {
        return this.service.getHabits();
    }

    @Get('food')
    async getFood(): Promise<CapybaraFoodDto> {
        return this.service.getFood();
    }

    @Get('countries')
    async getCountries(): Promise<CapybaraCountriesDto> {
        return this.service.getCountries();
    }

} 