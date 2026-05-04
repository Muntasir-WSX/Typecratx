interface Developer <T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;
    };

    smartwatch: T ;

    

}

const poorDeveloper : Developer<{
    heartRate: string;
    stopwatch: string;
    Steps: number;
    }> = {
    name: " Mr. Poor",
    salary: 20,
    device: {
        brand: 'Realme',
        model: 'C30',
        releaseYear: '2021'
    },

    smartwatch: {
        heartRate: '80 bpm',
        stopwatch: '00:30:00',
        Steps: 5000,
    }
}
const RichDeveloper : Developer<{
   
    callSupprt: boolean;
    AiFeatures: string[];
    Steps: number;
    }> = {
    name: " Mr. Rich",
    salary: 120,
    device: {
        brand: 'Iphone 17',
        model: 'Pro Max',
        releaseYear: '2026'
    },

    smartwatch: {
        Steps: 10000,
        callSupprt: true,
        AiFeatures: ['Voice Assistant', 'Health Monitoring']
    }
}

