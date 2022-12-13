import Typography from "@mui/material/Typography";
import * as React from "react";

interface INameSidebarProps {
  name?: string;
}

export const NameSidebar: React.FunctionComponent<INameSidebarProps> = (props) => {
  const { name } = props;
  return <span className="font-mulish text-2xl text-white text-center">{name}</span>;
};

NameSidebar.defaultProps = {
  name: "NAME HERE",
};

interface IFieldGroupSidebarProps {
  children?: React.ReactNode;
  title: string;
  isListDisc?: boolean;
  className?: string;
}
export const FieldGroupSidebar: React.FunctionComponent<IFieldGroupSidebarProps> = (props) => {
  const { children, title, className } = props;
  return (
    <div className={`font-mulish text-lg text-white mt-8 relative ${className}`}>
      <span className="text-2xl">{title}</span>
      <ul className="gap-2 ml-8 flex flex-col pt-4 text-base list-disc">{children}</ul>
    </div>
  );
};

FieldGroupSidebar.defaultProps = {
  className: "",
};

interface IFieldSidebarProps {
  title?: string;
  href?: string;
  className?: string;
}

export const FieldSidebar: React.FunctionComponent<IFieldSidebarProps> = (props) => {
  const { title, href, className } = props;
  return (
    <li className={`break-words ${className}`}>
      {href ? (
        <a href={href}>
          <span>{href}</span>
        </a>
      ) : (
        <span>{title}</span>
      )}
    </li>
  );
};

FieldSidebar.defaultProps = {
  className: "",
};
