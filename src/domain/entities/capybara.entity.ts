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

export class CapybaraNameEntity {
    name: string;
    countries: string[];
}

export class CapybaraCountryEntity {
    name: string;
    continent: string;
    flagIcon: string;
}

export class CapybaraFoodEntity {
    food: string;
    scientificName: string;
    countries: string[];
}

export class CapybaraHabitatEntity {
    habitat: string;
    description: string;
    freshwaterAssociated: boolean;
}

export class CapybaraActivitiesEntity {
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
