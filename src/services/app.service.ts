import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useState, useEffect } from "react";
import { CvData } from "../types/data.model";
import { read } from "./app.config";
import AppConfig from "./app.config.json";

function AppService() {
  async function get<T>(...endpoints: string[]) {
    const subUrl = endpoints.join("/");
    return read<T>(subUrl).then((data) => data);
  }

  function convertObject<T>(stringify: any): T {
    if (typeof stringify === "string") {
      return JSON.parse(stringify) as T;
    }
    return Object.assign({}, stringify) as T;
  }
  return {
    get,
    convertObject,
  };
}

export const createAppService = () => {
  return AppService();
};

export default AppService;
