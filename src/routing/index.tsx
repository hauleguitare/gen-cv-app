import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ResumeComponent from "../containers/resume";
import createAppService from "../services/app.service";
import { CvDataResp, CVJSON } from "../types/data.model";
import { Routing } from "./routing.enum";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={`${Routing.RESUME}/:resumeId`} loader={beforeMountingRouting} element={<ResumeComponent />}></Route>
  )
);

async function beforeMountingRouting({ params }: any) {
  const appService = createAppService();
  const items = await appService.get<CvDataResp>("GetResume", "byId", params.resumeId);
  if (items.length <= 0) {
    return null;
  }
  const data = items[0];
  const convertJson = appService.convertObject<CVJSON>(data.cvjson);
  data.cvjson = convertJson;
  return data;
}
