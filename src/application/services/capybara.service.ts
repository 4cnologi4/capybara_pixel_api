import { Injectable, Inject } from '@nestjs/common';
import { ICapybaraRepository } from '../../domain/interfaces/capybara.repository.interface';
import { CapybaraNamesDto, CapybaraFoodDto, CapybaraResponseDto, CapybaraCountriesDto, CapybaraHabitatDto, CapybaraActivitiesDto } from '../../domain/dtos/capybara-response.dto';
import { CAPYBARA_REPOSITORY } from '../../core/constants/repository-tokens.constants';

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

    // Catalog methods (return arrays)
    async getAllNames(): Promise<{ status: string; data: CapybaraNamesDto[] }> {
        const data = await this.repository.getNames();
        return { status: 'success', data };
    }

    async getAllCountries(): Promise<{ status: string; data: CapybaraCountriesDto[] }> {
        const data = await this.repository.getCountries();
        return { status: 'success', data };
    }

    async getAllHabitats(): Promise<{ status: string; data: CapybaraHabitatDto[] }> {
        const data = await this.repository.getHabits();
        return { status: 'success', data };
    }

    async getAllActivities(): Promise<{ status: string; data: CapybaraActivitiesDto[] }> {
        const data = await this.repository.getActivities();
        return { status: 'success', data };
    }

    async getAllFood(): Promise<{ status: string; data: CapybaraFoodDto[] }> {
        const data = await this.repository.getFood();
        return { status: 'success', data };
    }

    // Single resource methods
    async getNameById(id: number): Promise<{ status: string; data: CapybaraNamesDto | null; message?: string }> {
        const item = await this.repository.getNameById(id);
        return item 
            ? { status: 'success', data: item }
            : { status: 'success', data: null, message: 'No results found for this search' };
    }

    async getCountryById(id: number): Promise<{ status: string; data: CapybaraCountriesDto | null; message?: string }> {
        const item = await this.repository.getCountryById(id);
        return item 
            ? { status: 'success', data: item }
            : { status: 'success', data: null, message: 'No results found for this search' };
    }

    async getHabitatById(id: number): Promise<{ status: string; data: CapybaraHabitatDto | null; message?: string }> {
        const item = await this.repository.getHabitatById(id);
        return item 
            ? { status: 'success', data: item }
            : { status: 'success', data: null, message: 'No results found for this search' };
    }

    async getActivityById(id: number): Promise<{ status: string; data: CapybaraActivitiesDto | null; message?: string }> {
        const item = await this.repository.getActivityById(id);
        return item 
            ? { status: 'success', data: item }
            : { status: 'success', data: null, message: 'No results found for this search' };
    }

    async getFoodById(id: number): Promise<{ status: string; data: CapybaraFoodDto | null; message?: string }> {
        const item = await this.repository.getFoodById(id);
        return item 
            ? { status: 'success', data: item }
            : { status: 'success', data: null, message: 'No results found for this search' };
    }
} 