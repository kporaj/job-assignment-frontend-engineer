import React from "react";
import { NavMenu } from "components/NavMenu";
import { useParams } from "react-router-dom";
import ArticleBanner from "components/ArticleBanner";
import { IArticleResponse } from "BackendTypes";
import { useAxiosGet } from "BackendHelper";

const ArticleScreen: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const { data: articleData, loading: articleDataLoading } = useAxiosGet<IArticleResponse>(
    `http://localhost:3000/api/articles/${slug}`
  );

  let renderedComponent = <div>Loading...</div>;
  if (!articleDataLoading && articleData?.article) {
    renderedComponent = (
      <ArticleBanner
        createdAt={articleData.article.createdAt}
        favorited={articleData.article.favorited}
        favoritesCount={articleData.article.favoritesCount}
        slug={articleData.article.slug}
        title={articleData.article.title}
        author={articleData.article.author}
      />
    );
  }

  return (
    <>
      <NavMenu />

      <div className="article-page">
        {renderedComponent}

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              {articleData?.article.body.split("\n").map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
              ))}
            </div>
          </div>

          <hr />

          <div className="article-actions">
            <div className="article-meta">
              <a href="/#/profile/ericsimmons">
                <img src="http://i.imgur.com/Qr71crq.jpg" />
              </a>
              <div className="info">
                <a href="/#/profile/ericsimmons" className="author">
                  Eric Simons
                </a>
                <span className="date">January 20th</span>
              </div>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round" />
                &nbsp; Follow Eric Simons
              </button>
              &nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart" />
                &nbsp; Favorite Post <span className="counter">(29)</span>
              </button>
            </div>
          </div>

          {/** COMMENT SECTION */}
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <form className="card comment-form">
                <div className="card-block">
                  <textarea className="form-control" placeholder="Write a comment..." rows={3} />
                </div>
                <div className="card-footer">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  <button className="btn btn-sm btn-primary">Post Comment</button>
                </div>
              </form>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="/#/profile/jacobschmidt" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="/#/profile/jacobschmidt" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="/#/profile/jacobschmidt" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="/#/profile/jacobschmidt" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                  <span className="mod-options">
                    <i className="ion-edit" />
                    <i className="ion-trash-a" />
                  </span>
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

export default ArticleScreen;
