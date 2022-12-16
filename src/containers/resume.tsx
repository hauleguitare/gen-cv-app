import * as React from "react";
import { useLoaderData } from "react-router-dom";
import Article from "../components/article";
import Sidebar from "../components/sidebar";
import useAppProvider from "../context/appContext";
import createAppService from "../services/app.service";
import { CvData, CvDataResp, CVJSON } from "../types/data.model";

interface IGenCvComponentProps {}

const ResumeComponent: React.FunctionComponent<IGenCvComponentProps> = (props) => {
  const dataLoader = useLoaderData() as CvData;
  const { Provider } = useAppProvider();

  if (!dataLoader) {
    return null;
  }
  //   React.useEffect(() => {
  //     async function getData() {
  //       const data = await appService.get<CvDataResp>("GetResume", "byid", "1217");
  //       if (data.length <= 0) {
  //         return;
  //       }
  //       const convertObject = appService.convertObject<CVJSON>(data[0].cvjson);
  //       data[0].cvjson = convertObject;
  //       setData(data[0]);
  //     }
  //     getData();
  //   }, []);

  const onPrint = () => {
    window.print();
  };

  return (
    <React.Fragment>
      <div className="w-full flex justify-center">
        <button onClick={onPrint} className="py-2 px-2 bg-blue-500 rounded-md mt-4">
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
