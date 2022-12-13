import * as React from "react";
import useAppProvider from "../../context/appContext";
import { ArticleGroup, Timeline, Typography } from "../article-field";

interface IEndLineProps {
  text?: string;
}

const EndLine: React.FunctionComponent<IEndLineProps> = (props) => {
  const { text } = props;
  const arr = text?.split("•");
  return (
    <React.Fragment>
      {arr?.map((val, index) => (
        <React.Fragment key={`${val}_${index}`}>
          {val} <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

interface IArticleProps {}

const Article: React.FunctionComponent<IArticleProps> = (props) => {
  const { Context } = useAppProvider();

  return (
    <Context.Consumer>
      {(data) =>
        data && (
          <React.Fragment>
            <main className="flex-auto mx-8 mt-16">
              <ArticleGroup>
                <Typography usage="title">{data.fullname}</Typography>
              </ArticleGroup>

              {/* -------------------------------- EDUCATION -------------------------------- */}
              {data.cvjson.education && (
                <ArticleGroup>
                  <Typography usage="title">Education</Typography>
                  {data.cvjson.education.map((val, index) => (
                    <React.Fragment key={`education_${index}`}>
                      <Timeline from={val.startDate} to={val.endDate}>
                        <Typography usage="content" className="font-bold !text-xl">
                          {val.schoolName}
                        </Typography>

                        <Typography usage="content" className="font-bold">
                          {val.degreeName}
                        </Typography>

                        <Typography usage="content">{val.fieldOfStudy}</Typography>
                      </Timeline>
                      <Typography usage="content"></Typography>
                    </React.Fragment>
                  ))}
                </ArticleGroup>
              )}

              {/* -------------------------------- EPERIENCES -------------------------------- */}
              {data.cvjson.experiences && (
                <ArticleGroup>
                  <Typography usage="title">Eperiences</Typography>
                  {data.cvjson.experiences.map((val, index) => (
                    <React.Fragment key={`experiences_${index}`}>
                      <Timeline from={val.startDate} to={val.endDate}>
                        <Typography usage="content" className="font-bold !text-lg">
                          {val.company}
                        </Typography>
                        {val.location && (
                          <Typography usage="content" className="font-bold !text-gray-600">
                            {val.location} - Area
                          </Typography>
                        )}
                        {val.title && (
                          <Typography usage="content" className="font-bold">
                            {val.title}
                          </Typography>
                        )}

                        {val.description && (
                          <Typography usage="content" className="list-disc">
                            <EndLine text={val.description} />
                          </Typography>
                        )}
                      </Timeline>
                    </React.Fragment>
                  ))}
                </ArticleGroup>
              )}
            </main>
          </React.Fragment>
        )
      }
    </Context.Consumer>
  );
};

export default Article;

/*

<ArticleGroup>
                <Typography usage="title">Experiences</Typography>
                <Timeline from="June 2020" to="September 2022">
                  <Typography usage="content" className="font-bold">
                    Working in Google
                  </Typography>
                </Timeline>
                <Timeline from="June 2020" to="September 2022">
                  <Typography usage="content" className="font-bold">
                    Working in Google
                  </Typography>
                </Timeline>
              </ArticleGroup>

*/
