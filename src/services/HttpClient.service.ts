export class HttpClient {
  static #baseUrl: string = "https://jsonplaceholder.typicode.com";

  constructor() {}

  async get(endpoint: string) {
    try {
      const response = await fetch(`${HttpClient.#baseUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
