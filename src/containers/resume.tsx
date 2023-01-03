import * as React from "react";
import { useLoaderData, useLocation, useSearchParams } from "react-router-dom";
import Article from "../components/article";
import Sidebar from "../components/sidebar";
import useAppProvider from "../context/appContext";
import createAppService from "../services/app.service";
import { CvData, CvDataResp, CVJSON } from "../types/data.model";
import "./styles.css";
import { useEffect, useState } from "react";



interface IDynamicObject {
  [key: string]: any
}
export interface IQueryParams extends IDynamicObject{
  fullname: string;
  email: string;
  limitSkill: number;
}
interface IGenCvComponentProps {}


const ResumeComponent: React.FunctionComponent<IGenCvComponentProps> = (props) => {
  const dataLoader = useLoaderData() as CvData;
  const { Provider } = useAppProvider();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<Partial<IQueryParams>>({});

  const getParamsFromURL = () => {
    const params: Partial<IQueryParams> = {};
    params.fullname = searchParams.get('fullname') ?? undefined;
    params.email = searchParams.get('email') ?? undefined;
    params.limitSkill = searchParams.get('limitSkill') ? Number(searchParams.get('limitSkill')) : undefined;


    // Loop object find if value is undefined or Not A Number (NaN) then remove from Object
    for(let key in params){
      if (!params[key] || Number.isNaN(params[key])){
        delete params[key];
      }
    }
    return params;
  }

  // Attention: UseEffect will be call if location.search has change
  // example: old state -> https://domain.com/fullname=abc&email=abc&limitSkill=1 will be call if new state -> https://domain.com/fullname=abc&email=abdde@gmail.com&limitSkill=1
  useEffect(() => {
    if (!searchParams.get('fullname') && !searchParams.get('email') && !searchParams.get('limitSkill')){
      return;
    }
    const params = getParamsFromURL();
    setParams(params);
    console.log(params);
  }, [location.search])



  // if (!dataLoader) {
  //   return null;
  // }

  return (
    <React.Fragment>
      <Provider value={dataLoader}>
        <div className="min-h-screen flex container">
          <Sidebar email={params.email} limitSkill={params.limitSkill}/>
          <Article fullname={params.fullname}/>
        </div>
      </Provider>
    </React.Fragment>
  );
};

export default ResumeComponent;
