import { Injectable } from '@nestjs/common';
import { CapybaraRepository } from '../../domain/interfaces/capybara.repository.interface';
import { CapybaraEntity } from '../../domain/entities/capybara.entity';

@Injectable()
export class MockCapybaraRepository implements CapybaraRepository {
    getHabits(): Promise<CapybaraEntity> {
        throw new Error('Method not implemented.');
    }
    getFood(): Promise<CapybaraEntity> {
        throw new Error('Method not implemented.');
    }
    getCountries(): Promise<CapybaraEntity> {
        throw new Error('Method not implemented.');
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

    // Implement other methods similarly...
} 