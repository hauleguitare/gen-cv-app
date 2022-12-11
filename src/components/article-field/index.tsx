import * as React from "react";

interface IArticleGroupProps {
  children?: React.ReactNode;
}

export const ArticleGroup: React.FunctionComponent<IArticleGroupProps> = (props) => {
  const { children } = props;
  return <div className="font-mulish border-b-2 border-stone-300 mb-8">{children}</div>;
};

interface TypographyProps {
  usage?: "title" | "content";
  children?: React.ReactNode;
  className?: string;
}

export const Typography: React.FunctionComponent<TypographyProps> = (props) => {
  const { usage, children, className } = props;
  return (
    <div className="pb-4">
      {usage === "content" ? (
        <span className={`text-base ${className}`}>{children}</span>
      ) : (
        <h3 className={`text-4xl font-bold ${className}`}>{children}</h3>
      )}
    </div>
  );
};

Typography.defaultProps = {
  usage: "content",
  className: "",
};

interface TimelineProps {
  from?: string;
  to?: string;
  children?: React.ReactNode;
}

export const Timeline: React.FunctionComponent<TimelineProps> = (props) => {
  const { from, to, children } = props;
  return (
    <div className=" m-4 pl-4">
      <div className="flex gap-2 uppercase font-medium italic text-gray-600 pb-2">
        <span>{from}</span>-<span>{to}</span>
      </div>

      {children}
    </div>
  );
};
