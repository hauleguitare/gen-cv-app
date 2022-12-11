import * as React from "react";

interface IAvatarProps {
  src: string;
}

const Avatar: React.FunctionComponent<IAvatarProps> = (props) => {
  const { src } = props;
  return (
    <div className="w-[228px] h-[228px] rounded-full overflow-hidden object-cover shadow-xl">
      <img className="w-full h-full" src={src} />
    </div>
  );
};

export default Avatar;
