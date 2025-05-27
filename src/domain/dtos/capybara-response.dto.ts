export class CapybaraResponseDto {
    id: number;
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
    id: number;
    habits: string[];
    imageUrl: string;
}

export class CapybaraCountriesDto {
    id: number;
    name: string;
    continent: string;
    flagIcon: string;
}

export class CapybaraNamesDto {
    id: number;
    name: string;
    countries: string[];
}

export class CapybaraFoodDto {
    id: number;
    food: string;
    scientificName: string;
    countries: string[];
}

export class CapybaraHabitatDto {
    id: number;
    habitat: string;
    description: string;
    freshwaterAssociated: boolean;
}

export class CapybaraActivitiesDto {
    id: number;
    activity: string;
    description: string;
    type: string;
    seasonalPattern: {
        frequency: string;
        timeOfDay: string;
        climateInfluence: string;
    };
    averageDuration: string;
    biologicalImportance: string;
    energyExpenditure: string;
    riskLevel: string;
    relationWithOtherAnimals: string;
    humanInfluence: string;
}
