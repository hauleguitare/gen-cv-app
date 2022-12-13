import * as React from "react";
import Modal from "../modal";
import { FieldGroupSidebar, FieldSidebar } from "../sidebar-field";

interface IFieldSidebarLanguageChangeStateProps {
  defaultData: string[];
  title: string;
  callback?: (event: React.MouseEvent, element: any) => void;
}

const FieldSidebarChangeState: React.FunctionComponent<IFieldSidebarLanguageChangeStateProps> = (props) => {
  const { defaultData, title, callback } = props;
  const [data, setData] = React.useState(defaultData);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOnClick = (event: React.MouseEvent, element: string) => {
    event.preventDefault();
    if (callback) {
      callback(event, element);
      return;
    }
    handleDefaultOnClick(event, element);
  };

  const handleDefaultOnClick = (event: React.MouseEvent, element: string) => {
    const filterData = data.filter((val) => val.toUpperCase() !== element.toUpperCase());
    setData(filterData);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }
    handleProcessData(inputRef.current.value);
  };

  const handleProcessData = (value: string) => {
    const tempData = data;
    tempData.push(value);
    setData(tempData);
    setOpen(!isOpen);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const onOpenModal = () => {
    setOpen(!isOpen);
  };

  return (
    <FieldGroupSidebar title={title} className="group">
      <button
        onClick={onOpenModal}
        className="absolute top-0 left-0 py-2 px-2 bg-blue-500 group-hover:visible invisible transition-all duration-150 rounded-md"
      >
        Change State
      </button>
      {isOpen && (
        <Modal
          onClose={(open) => {
            setOpen(open);
          }}
        >
          <div className="bg-white rounded-lg py-4 px-4 text-black">
            <form
              className="flex flex-col gap-4"
              onSubmit={(event) => {
                handleOnSubmit(event);
              }}
            >
              <input ref={inputRef} type={"text"} placeholder="Input here" className="py-2 px-2 w-96" />
              <button type="submit" className="bg-blue-500 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}

      {data.map((element, idx) => (
        <a key={`${idx}_${element}`} href="#" onClick={(event) => handleOnClick(event, element)}>
          <FieldSidebar
            key={`index_${element}`}
            title={element}
            className="hover:bg-blue-500 rounded-lg transition-all duration-150 py-2"
          ></FieldSidebar>
        </a>
      ))}
    </FieldGroupSidebar>
  );
};

export default FieldSidebarChangeState;
