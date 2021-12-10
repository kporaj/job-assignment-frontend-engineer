import React from "react";
import AuthorImage from "./AuthorImage";
import FavoriteArticleButton from "./FavoriteArticleButton";
import { IArticleFields, IProfileFields } from "BackendTypes";

type ArticleListItemProps = Pick<
  IArticleFields,
  "createdAt" | "description" | "slug" | "title" | "favorited" | "favoritesCount"
> & { author: Pick<IProfileFields, "image" | "username"> };

const ArticleListItem: React.FC<ArticleListItemProps> = ({
  slug,
  title,
  createdAt,
  author,
  favorited,
  favoritesCount,
  description,
}) => {
  return (
    <div className="article-preview">
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
        <FavoriteArticleButton favoritesCount={favoritesCount} favorited={favorited} articleSlug={slug} />
      </div>
      <a href={`/#/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
};

export default ArticleListItem;
