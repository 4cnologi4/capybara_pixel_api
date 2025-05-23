import { Injectable, Inject } from '@nestjs/common';
import { ICapybaraRepository } from '../../domain/interfaces/capybara.repository.interface';
import { CapybaraNamesDto, CapybaraFoodDto, CapybaraResponseDto, CapybaraCountriesDto, CapybaraHabitatDto, CapybaraActivitiesDto } from '../../domain/dtos/capybara-response.dto';
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

    async getHabits(): Promise<CapybaraHabitatDto[]> {
        const data = await this.repository.getHabits();
        return Object.values(data);
    }

    async getActivities(): Promise<CapybaraActivitiesDto[]> {
        const data = await this.repository.getActivities();
        return Object.values(data);
    }

    async getFood(): Promise<CapybaraFoodDto[]> {
        const data = await this.repository.getFood();
        return Object.values(data);
    }

    async getCountries(): Promise<CapybaraCountriesDto[]> {
        const data = await this.repository.getCountries();
        return Object.values(data);
    }

    async getNames(): Promise<CapybaraNamesDto[]> {
        const data = await this.repository.getNames();
        return Object.values(data) ;
    }
} 