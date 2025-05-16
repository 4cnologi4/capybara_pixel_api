import { CapybaraEntity } from '../entities/capybara.entity';

export interface CapybaraRepository {
  getCapybara(type: '2d' | '3d'): Promise<CapybaraEntity>;
  getHabits(): Promise<CapybaraEntity>;
  getFood(): Promise<CapybaraEntity>;
  getCountries(): Promise<CapybaraEntity>;
} 