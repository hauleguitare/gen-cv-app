import * as React from "react";
import useAppProvider from "../../context/appContext";
import { ArticleGroup, Timeline, Typography } from "../article-field";

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
                <Typography usage="title">Objective</Typography>
                <Typography usage="content" className="text-gray-600">
                  "Always to learning, hard working and enjoy it !"
                </Typography>
              </ArticleGroup>

              <ArticleGroup>
                <Typography usage="title">Summary</Typography>
                <Typography usage="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, autem itaque facere error
                  ratione nobis vel, fugit sit ut, aspernatur veniam nisi sequi qui voluptatibus ea provident amet
                  dignissimos. Voluptas!
                </Typography>
              </ArticleGroup>

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

              {/* <ArticleGroup>
        <Typography usage="title">Educations</Typography>
        <Timeline from="June 2018" to="September 2022">
          <Typography usage="content" className="font-bold">
            Mary Current High school
          </Typography>
        </Timeline>
        <Timeline from="June 2020" to="September 2022">
          <Typography usage="content" className="font-bold">
            Harvard University
          </Typography>
        </Timeline>
      </ArticleGroup>

      <ArticleGroup>
        <Typography usage="title">Educations</Typography>
        <Timeline from="June 2018" to="September 2022">
          <Typography usage="content" className="font-bold">
            Mary Current High school
          </Typography>
        </Timeline>
        <Timeline from="June 2020" to="September 2022">
          <Typography usage="content" className="font-bold">
            Harvard University
          </Typography>
        </Timeline>
      </ArticleGroup> */}
            </main>
          </React.Fragment>
        )
      }
    </Context.Consumer>
  );
};

export default Article;
