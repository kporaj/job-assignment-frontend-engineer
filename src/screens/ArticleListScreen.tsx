import { useAxiosGet } from "BackendHelper";
import { IArticlesResponse } from "BackendTypes";
import ArticleListItem from "components/ArticleListItem";
import { NavMenu } from "components/NavMenu";
import React from "react";

const ArticleListScreen: React.FC = () => {
  const { data: articlesData, loading: articlesDataLoading } = useAxiosGet<IArticlesResponse>(
    "http://localhost:3000/api/articles"
  );

  let renderedComponent = <div>Loading...</div>;
  if (!articlesDataLoading && articlesData) {
    renderedComponent = (
      <>
        {articlesData?.articles.map(({ slug, title, createdAt, author, favorited, favoritesCount, description }) => (
          <ArticleListItem
            key={slug}
            slug={slug}
            title={title}
            createdAt={createdAt}
            author={{ username: author.username, image: author.image }}
            favoritesCount={favoritesCount}
            favorited={favorited}
            description={description}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <NavMenu />

      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link disabled" href="">
                      Your Feed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>

              {renderedComponent}
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <a href="" className="tag-pill tag-default">
                    programming
                  </a>
                  <a href="" className="tag-pill tag-default">
                    javascript
                  </a>
                  <a href="" className="tag-pill tag-default">
                    emberjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    angularjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    react
                  </a>
                  <a href="" className="tag-pill tag-default">
                    mean
                  </a>
                  <a href="" className="tag-pill tag-default">
                    node
                  </a>
                  <a href="" className="tag-pill tag-default">
                    rails
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <a href="/#" className="logo-font">
            conduit
          </a>
          <span className="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
};

export default ArticleListScreen;
