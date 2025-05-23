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

export class CapybaraCountriesDto {
    name: string;
    continent: string;
    flagIcon: string;
}

export class CapybaraNamesDto {
    name: string;
    countries: string[];
}

export class CapybaraFoodDto {
    food: string;
    scientificName: string;
    countries: string[];
}

export class CapybaraHabitatDto {
    habitat: string;
    description: string;
    freshwaterAssociated: boolean;
}

export class CapybaraActivitiesDto {
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
