export interface Task {
        id?: number;
        description: string;
        status: string;
        project: {
            id: number;
            projectName: string;
        };
        teamMember: {
            id: number;
            name: string;
            email: string;
        };
    }
    