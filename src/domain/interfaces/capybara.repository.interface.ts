import { CapybaraNameEntity, CapybaraEntity, CapybaraCountryEntity, CapybaraFoodEntity, CapybaraHabitatEntity, CapybaraActivitiesEntity } from '../entities/capybara.entity';

export interface ICapybaraRepository {
  getCapybara(type: '2d' | '3d'): Promise<CapybaraEntity>;
  getById(id: string): Promise<CapybaraEntity | null>;
  getHabits(): Promise<CapybaraHabitatEntity[]>;
  getActivities(): Promise<CapybaraActivitiesEntity[]>;
  getFood(): Promise<CapybaraFoodEntity[]>;
  getCountries(): Promise<CapybaraCountryEntity[]>;
  getNames(): Promise<CapybaraNameEntity[]>;
}