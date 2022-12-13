import * as React from "react";

interface IModalProps {
  children?: React.ReactNode;
  onClose: (isOpen: boolean) => void;
}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
  const { children, onClose } = props;

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onClose(false);
    }
  };
  return (
    <React.Fragment>
      <div className="fixed inset-0 bg-black/60">
        <div tabIndex={0} onBlur={onBlur} className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
