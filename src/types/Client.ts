export interface Client {
    user: {
        tag: string;
    };
    on: (event: string, callback: (...args: any[]) => void) => void;
    guilds: {
        cache: {
            size: number;
        };
    };
    users: {
        cache: {
            size: number;
        };
    };
}