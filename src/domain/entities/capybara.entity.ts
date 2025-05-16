export class CapybaraEntity {
  id: string;
  type: '2d' | '3d';
  imageUrl: string;
  details: string;
  habits: string[];
  favoriteFood: {
    name: string;
    originCountries: string[];
  };
  nativeCountries: string[];
} 