interface User {
    id: number;
    username: string;
    email: string;
}

declare class SDK {
    #private;
    constructor();
    static getInstance(): SDK;
    fetchUsers(): Promise<User[]>;
}
declare const _default: SDK;

export { _default as default };
