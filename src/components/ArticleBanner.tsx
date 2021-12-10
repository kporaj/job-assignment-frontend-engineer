import { IArticleFields, IProfileFields } from "BackendTypes";
import AuthorImage from "components/AuthorImage";
import FavoriteArticleButton from "components/FavoriteArticleButton";
import FollowAuthorButton from "components/FollowAuthorButton";
import React from "react";

type ArticleBannerProps = Pick<IArticleFields, "createdAt" | "favorited" | "favoritesCount" | "slug" | "title"> & {
  author: Pick<IProfileFields, "image" | "username" | "following">;
};

const ArticleBanner: React.FC<ArticleBannerProps> = ({ createdAt, favorited, favoritesCount, slug, title, author }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>

        <div className="article-meta">
          <a href={`/#/profile/${author.username}`}>
            <AuthorImage imageUrl={author.image} />
          </a>
          <div className="info">
            <a href={`/#/profile/${author.username}`} className="author">
              {author.username}
            </a>
            <span className="date">{new Date(createdAt).toLocaleDateString()}</span>
          </div>
          {/**Button to follow author (with followers count) -> brakuje tego chyba w api? */}
          <FollowAuthorButton authorUsername={author.username} followed={author.following} />
          &nbsp;&nbsp;
          <FavoriteArticleButton articleSlug={slug} favorited={favorited} favoritesCount={favoritesCount} />
        </div>
      </div>
    </div>
  );
};

export default ArticleBanner;
