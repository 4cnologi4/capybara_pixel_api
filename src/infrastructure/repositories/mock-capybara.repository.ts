import { Injectable } from '@nestjs/common';
import { CapybaraRepository } from '../../domain/interfaces/capybara.repository.interface';
import { CapybaraEntity } from '../../domain/entities/capybara.entity';

@Injectable()
export class MockCapybaraRepository implements CapybaraRepository {
    async getHabits(): Promise<Pick<CapybaraEntity, 'habits' | 'imageUrl'>> {
        return Promise.resolve({
            habits: ['swimming', 'sunbathing', 'grazing'],
            imageUrl: 'https://example.com/capybara-habits.png',
        });
    }
    async getFood(): Promise<Pick<CapybaraEntity, 'favoriteFood'>> {
        return Promise.resolve({
            favoriteFood: {
                name: 'Water plants',
                originCountries: ['Brazil', 'Venezuela'],
            },
        });
    }
    async getCountries(): Promise<Pick<CapybaraEntity, 'nativeCountries'>> {
        return Promise.resolve({
            nativeCountries: ['Brazil', 'Colombia', 'Venezuela', 'Argentina', 'Peru'],
        });
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

    // Implement other methods similarly...
}