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

    async getCapybara(type: '2d' | '3d'): Promise<CapybaraEntity> {
        return {
            id: '1',
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
            id: '1',
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

    async getNames(): Promise<CapybaraNameEntity[]> {
        return Promise.resolve(this.data.names);
    }
}