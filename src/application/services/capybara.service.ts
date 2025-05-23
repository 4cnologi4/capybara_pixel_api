import { Injectable, Inject } from '@nestjs/common';
import { ICapybaraRepository } from '../../domain/interfaces/capybara.repository.interface';
import { CapybaraNamesDto, CapybaraFoodDto, CapybaraHabitsDto, CapybaraResponseDto, CapybaraCountriesDto } from '../../domain/dtos/capybara-response.dto';
import { CAPYBARA_REPOSITORY } from 'src/core/constants/repository-tokens.constants';

@Injectable()
export class CapybaraService {
    constructor(
        @Inject(CAPYBARA_REPOSITORY)
        private readonly repository: ICapybaraRepository,
    ) { }

    /*     async getCapybara(type: '2d' | '3d'): Promise<CapybaraResponseDto> {
            const data = await this.repository.getCapybara(type);
            return { ...data } as CapybaraResponseDto;
        } */

    async getCapybara(type: '2d' | '3d'): Promise<CapybaraResponseDto> {
        const data = await this.repository.getCapybara(type);
        return {
            id: data.id,
            type: data.type,
            imageUrl: data.imageUrl,
            details: data.details,
        };
    }

    async getById(id: string): Promise<CapybaraResponseDto | null> {
        const capybara = await this.repository.getById(id);
        return capybara ? {
            id: capybara.id,
            type: capybara.type,
            imageUrl: capybara.imageUrl,
            details: capybara.details,
            /*             habits: capybara.habits,
                        favoriteFood: capybara.favoriteFood,
                        nativeCountries: capybara.nativeCountries, */
        } : null;
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

    async getNames(): Promise<CapybaraNamesDto[]> {
        const data = await this.repository.getNames();
        return Object.values(data) ;
    }
} 