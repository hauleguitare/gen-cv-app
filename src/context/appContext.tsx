import * as React from "react";
import { CvData } from "../types/data.model";

interface IAppContextProps {
  children: React.ReactNode;
  value: CvData | null;
}

const Context = React.createContext<CvData | null>(null);
const AppContext: React.FunctionComponent<IAppContextProps> = (props) => {
  const { children, value } = props;
  return (
    <React.Fragment>
      <Context.Provider value={value}>{children}</Context.Provider>
    </React.Fragment>
  );
};

AppContext.defaultProps = {
  value: null,
};

const useAppProvider = () => {
  return {
    Context: Context,
    Provider: AppContext,
  };
};

export default useAppProvider;
