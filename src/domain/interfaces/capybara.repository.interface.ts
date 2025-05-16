import { CapybaraEntity } from '../entities/capybara.entity';

export interface CapybaraRepository {
  getCapybara(type: '2d' | '3d'): Promise<CapybaraEntity>;
  getHabits(): Promise<Pick<CapybaraEntity, 'habits' | 'imageUrl'>>;
  getFood(): Promise<Pick<CapybaraEntity, 'favoriteFood'>>;
  getCountries(): Promise<Pick<CapybaraEntity, 'nativeCountries'>>;
}