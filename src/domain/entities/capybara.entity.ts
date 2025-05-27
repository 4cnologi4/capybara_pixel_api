export class CapybaraEntity {
    id: number;
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

export class CapybaraNameEntity {
    id: number;
    name: string;
    countries: string[];
}

export class CapybaraCountryEntity {
    id: number;
    name: string;
    continent: string;
    flagIcon: string;
}

export class CapybaraFoodEntity {
    id: number;
    food: string;
    scientificName: string;
    countries: string[];
}

export class CapybaraHabitatEntity {
    id: number;
    habitat: string;
    description: string;
    freshwaterAssociated: boolean;
}

export class CapybaraActivitiesEntity {
    id: number;
    activity: string;
    description: string;
    type: 'individual' | 'social' | 'individual o social';
    seasonalPattern: {
        frequency: string;
        timeOfDay: string;
        climateInfluence: string;
    };
    averageDuration: string;
    biologicalImportance: 'alta' | 'media' | 'baja';
    energyExpenditure: 'alto' | 'medio' | 'bajo';
    riskLevel: 'alto' | 'medio' | 'bajo';
    relationWithOtherAnimals: string;
    humanInfluence: string;
}
