import { Injectable, Inject } from '@nestjs/common';
import { CapybaraRepository } from '../../domain/interfaces/capybara.repository.interface';
import { CapybaraFoodDto, CapybaraHabitsDto, CapybaraResponseDto, CapybaraCountriesDto } from '../../domain/dtos/capybara-response.dto';

@Injectable()
export class CapybaraService {
    constructor(
        @Inject('CAPYBARA_REPOSITORY')
        private readonly repository: CapybaraRepository,
    ) { }

    async getCapybara(type: '2d' | '3d'): Promise<CapybaraResponseDto> {
        const data = await this.repository.getCapybara(type);
        return { ...data } as CapybaraResponseDto;
    }

    async getHabits(): Promise<CapybaraHabitsDto> {
        const data = await this.repository.getHabits();
        return {
            habits: data.habits,
            imageUrl: data.imageUrl,
        };
    }

    async getFood(): Promise<CapybaraFoodDto> {
        const data = await this.repository.getFood();
        return {
            food: data.favoriteFood.name,
            originCountries: data.favoriteFood.originCountries,
        };
    }

    async getCountries(): Promise<CapybaraCountriesDto> {
        const data = await this.repository.getCountries();
        return {
            countries: data.nativeCountries,
        };
    }
} 