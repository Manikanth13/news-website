import { Config } from "@app/config";
import axios, { AxiosRequestConfig } from "axios";

class ApiService {
  baseUrl: string;
  apiKey: string
  constructor() {
    this.baseUrl = Config.SERVER_URL ?? "";
    this.apiKey = Config.API_KEY ?? ""
  }

  async getHeaders(header = {}) {
    let token = "";
    return {
      access_token: token,
      "Content-Type": "application/json",
      ...header,
    };
  }

  async handleResponse<R = any>(resolver: Promise<{ data: R }>) {
    const response = await resolver;
    return response.data;
  }

  getUrl(endpoint: string) {
    return this.baseUrl  + '?apikey=' +this.apiKey + endpoint;
  }

  async get(endpoint: string, config?: AxiosRequestConfig<any> | undefined) {
    return await this.handleResponse(axios.get(this.getUrl(endpoint), config));
  }

  async post<T = any, R = any>(
    endpoint: string,
    payload: T,
    config?: AxiosRequestConfig<any> | undefined
  ) {
    return await this.handleResponse<R>(
      axios.post<T, { data: R }>(this.getUrl(endpoint), payload, config)
    );
  }

  async delete(endpoint: string) {
    return await this.handleResponse(
      axios.delete(this.getUrl(endpoint), { headers: await this.getHeaders() })
    );
  }

  async patch(endpoint: string) {
    return await this.handleResponse(
      axios.patch(this.getUrl(endpoint), { headers: await this.getHeaders() })
    );
  }

  async put<T>(endPoint: string, payload: T) {
    return await this.handleResponse(
      axios.put(this.getUrl(endPoint), payload, {
        headers: await this.getHeaders(),
      })
    );
  }
}

export const apiService = new ApiService();
