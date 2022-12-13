import React from "react";
import Article from "./components/article";
import Avatar from "./components/avatar";
import Sidebar from "./components/sidebar";
import useAppService from "./services/app.service";
import { CvData, CvDataResp, CVJSON } from "./types/data.model";
import useAppProvider from "./context/appContext";

function App() {
  const appService = useAppService();
  const [data, setData] = React.useState<CvData | null>(null);
  const { Provider } = useAppProvider();

  React.useEffect(() => {
    async function getData() {
      const data = await appService.get<CvDataResp>("GetResume", "byid", "1217");
      if (data.length <= 0) {
        return;
      }
      const convertObject = appService.convertObject<CVJSON>(data[0].cvjson);
      data[0].cvjson = convertObject;
      setData(data[0]);
    }
    getData();
  }, []);

  const onPrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <div className="w-full flex justify-center">
        <button onClick={onPrint} className="py-2 px-2 bg-blue-500 rounded-md mt-4">
          PRINT PDF
        </button>
      </div>
      <Provider value={data}>
        <div className="min-h-screen flex container">
          <Sidebar />
          <Article />
        </div>
      </Provider>
    </div>
  );
}

export default App;
