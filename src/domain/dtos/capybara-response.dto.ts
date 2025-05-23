export class CapybaraResponseDto {
    id: string;
    type: '2d' | '3d';
    imageUrl: string;
    details: string;
    /*   habits: string[];
      favoriteFood: {
        name: string;
        originCountries: string[];
      };
      nativeCountries: string[]; */
}

export class CapybaraHabitsDto {
    habits: string[];
    imageUrl: string;
}

export class CapybaraFoodDto {
    food: string;
    originCountries: string[];
}

export class CapybaraCountriesDto {
    countries: string[];
}

export class CapybaraNamesDto {
    name: string;
    countries: string[];
} 