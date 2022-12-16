import * as React from "react";
import { useLoaderData } from "react-router-dom";
import Article from "../components/article";
import Sidebar from "../components/sidebar";
import useAppProvider from "../context/appContext";
import createAppService from "../services/app.service";
import { CvData, CvDataResp, CVJSON } from "../types/data.model";
import "./styles.css";

interface IGenCvComponentProps {}

const ResumeComponent: React.FunctionComponent<IGenCvComponentProps> = (props) => {
  const dataLoader = useLoaderData() as CvData;
  const { Provider } = useAppProvider();

  if (!dataLoader) {
    return null;
  }

  const onPrint = () => {
    window.print();
  };

  return (
    <React.Fragment>
      <div className="w-full flex justify-center">
        <button onClick={onPrint} className="py-2 px-2 bg-blue-500 rounded-md mt-4 noprint">
          PRINT PDF
        </button>
      </div>
      <Provider value={dataLoader}>
        <div className="min-h-screen flex container">
          <Sidebar />
          <Article />
        </div>
      </Provider>
    </React.Fragment>
  );
};

export default ResumeComponent;
