import type { User } from "../models/User.model.ts";
import { HttpClient } from "../services/HttpClient.service.ts";

export class UsersAPI {
  #httpClient: HttpClient;

  constructor() {
    this.#httpClient = new HttpClient();
  }

  async getUsers(): Promise<User[]> {
    try {
      const users = await this.#httpClient.get("/users");
      return users as User[];
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
}
