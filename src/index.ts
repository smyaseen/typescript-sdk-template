import { UsersAPI } from "./apis/Users.api.ts";

class SDK {
  static #instance: SDK;
  #usersAPI: UsersAPI;

  constructor() {
    this.#usersAPI = new UsersAPI();
  }

  public static getInstance(): SDK {
    if (!SDK.#instance) {
      SDK.#instance = new SDK();
    }
    return SDK.#instance;
  }

  public fetchUsers() {
    return this.#usersAPI.getUsers();
  }
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).sdk = SDK.getInstance();
}

export default SDK.getInstance();
