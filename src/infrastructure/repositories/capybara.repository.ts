import { Injectable } from '@nestjs/common';
import { ICapybaraRepository } from '../../domain/interfaces/capybara.repository.interface';
import { CapybaraActivitiesEntity, CapybaraCountryEntity, CapybaraEntity, CapybaraFoodEntity, CapybaraHabitatEntity, CapybaraNameEntity } from '../../domain/entities/capybara.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CapybaraRepository implements ICapybaraRepository {
    private readonly data: { 
        names: CapybaraNameEntity[],
        countries: CapybaraCountryEntity[],
        food: CapybaraFoodEntity[],
        habitats: CapybaraHabitatEntity[],
        activities: CapybaraActivitiesEntity[]
     };

    constructor() {
        const dataPath = path.join(
            process.cwd(), // Use root project directory
            'src/infrastructure/data/capybara-data.json' // Relative path from root
        );
        this.data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    }

    async getHabits(): Promise<CapybaraHabitatEntity[]> {
        return Promise.resolve(this.data.habitats);
    }

    async getActivities(): Promise<CapybaraActivitiesEntity[]> {
        return Promise.resolve(this.data.activities);
    }

    async getFood(): Promise<CapybaraFoodEntity[]> {
        return Promise.resolve(this.data.food);
    }

    async getCountries(): Promise<CapybaraCountryEntity[]> {
        return Promise.resolve(this.data.countries);
    }    

    async getNames(): Promise<CapybaraNameEntity[]> {
        return Promise.resolve(this.data.names);
    }

    async getNameById(id: number): Promise<CapybaraNameEntity | null> {
        const item = this.data.names.find(item => item.id === id);
        return Promise.resolve(item || null);
    }

    async getCountryById(id: number): Promise<CapybaraCountryEntity | null> {
        const item = this.data.countries.find(item => item.id === id);
        return Promise.resolve(item || null);
    }

    async getHabitatById(id: number): Promise<CapybaraHabitatEntity | null> {
        const item = this.data.habitats.find(item => item.id === id);
        return Promise.resolve(item || null);
    }

    async getActivityById(id: number): Promise<CapybaraActivitiesEntity | null> {
        const item = this.data.activities.find(item => item.id === id);
        return Promise.resolve(item || null);
    }

    async getFoodById(id: number): Promise<CapybaraFoodEntity | null> {
        const item = this.data.food.find(item => item.id === id);
        return Promise.resolve(item || null);
    }

    async getCapybara(type: '2d' | '3d'): Promise<CapybaraEntity> {
        return {
            id: 1,
            type,
            imageUrl: `https://example.com/capybara-${type}.png`,
            details: 'Friendly rodent from South America',
            habits: ['swimming', 'sunbathing'],
            favoriteFood: {
                name: 'Water plants',
                originCountries: ['Brazil', 'Venezuela'],
            },
            nativeCountries: ['Brazil', 'Colombia', 'Venezuela'],
        };
    }

    async getById(id: string): Promise<CapybaraEntity | null> {
        const mockCapybara = {
            id: 1,
            type: '2d',
            imageUrl: 'https://example.com/capybara-2d.png',
            details: 'Friendly rodent from South America',
            habits: ['swimming', 'sunbathing'],
            favoriteFood: {
                name: 'Water plants',
                originCountries: ['Brazil', 'Venezuela'],
            },
            nativeCountries: ['Brazil', 'Colombia', 'Venezuela'],
        } as CapybaraEntity;
        return Promise.resolve(id === '1' ? mockCapybara : null);
    }
}