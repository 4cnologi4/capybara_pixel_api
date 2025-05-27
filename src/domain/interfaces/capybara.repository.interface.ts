import { CapybaraNameEntity, CapybaraEntity, CapybaraCountryEntity, CapybaraFoodEntity, CapybaraHabitatEntity, CapybaraActivitiesEntity } from '../entities/capybara.entity';

export interface ICapybaraRepository {
  getCapybara(type: '2d' | '3d'): Promise<CapybaraEntity>;
  getById(id: string): Promise<CapybaraEntity | null>;
  getHabits(): Promise<CapybaraHabitatEntity[]>;
  getActivities(): Promise<CapybaraActivitiesEntity[]>;
  getFood(): Promise<CapybaraFoodEntity[]>;
  getCountries(): Promise<CapybaraCountryEntity[]>;
  getNames(): Promise<CapybaraNameEntity[]>;
  getNameById(id: number): Promise<CapybaraNameEntity | null>;
  getCountryById(id: number): Promise<CapybaraCountryEntity | null>;
  getHabitatById(id: number): Promise<CapybaraHabitatEntity | null>;
  getActivityById(id: number): Promise<CapybaraActivitiesEntity | null>;
  getFoodById(id: number): Promise<CapybaraFoodEntity | null>;
}