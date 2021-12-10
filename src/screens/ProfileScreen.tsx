import React from "react";
import { NavMenu } from "components/NavMenu";
import { IArticlesResponse, IProfileResponse } from "BackendTypes";
import { useParams } from "react-router-dom";
import ProfileBanner from "components/ProfileBanner";
import ArticleListItem from "components/ArticleListItem";
import { useAxiosGet } from "BackendHelper";

const ProfileScreen: React.FC = () => {
  const { username } = useParams<{ username?: string }>();
  const { data: profileData } = useAxiosGet<IProfileResponse>(`http://localhost:3000/api/profiles/${username}`);
  const { data: articlesData } = useAxiosGet<IArticlesResponse>("http://localhost:3000/api/articles");

  return (
    <>
      <NavMenu />

      <div className="profile-page">
        {/** TODO - Loader */}
        {profileData?.profile && <ProfileBanner {...profileData.profile} />}

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      My Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Favorited Articles
                    </a>
                  </li>
                </ul>
              </div>

              {articlesData?.articles
                .filter(a => a.author.username === profileData?.profile.username)
                .map(({ slug, title, createdAt, author, favorited, favoritesCount, description }) => (
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

export default ProfileScreen;
