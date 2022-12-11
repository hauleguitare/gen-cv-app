import axios from "axios";
import Config from "./app.config.json";

const AppConfig = axios.create({
  baseURL: Config.baseUrl,
});

export function Read<T>(endpoint: string) {
  return AppConfig.get(`${endpoint}`, {}).then((resp) => resp.data as T);
}
