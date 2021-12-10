import { axiosDelete, axiosPost } from "BackendHelper";
import React, { useState } from "react";

interface FavoriteArticleButtonProps {
  articleSlug: string;
  favoritesCount: number;
  favorited: boolean;
  withLabel?: boolean;
}

const FavoriteArticleButton: React.FC<FavoriteArticleButtonProps> = ({
  favoritesCount,
  favorited,
  articleSlug,
  withLabel = false,
}) => {
  /** TODO - There must be a better way of updating this component (Refetching article data to cause rerender of this component by changing its properties)
   * So far I've worked with GraphQl and things were a little different there */
  const [favoritedState, setFavoritedState] = useState<boolean>(favorited);
  const [favoritesCountState, setFavoritesCountState] = useState<number>(favoritesCount);

  const handleFavoriteClick = () => {
    if (!favoritedState) {
      postFavorite();
    } else {
      deleteFavorite();
    }
  };

  const postFavorite = async () => {
    await axiosPost(`http://localhost:3000/api/articles/${articleSlug}/favorite`, true).then(() => {
      setFavoritedState(true);
      setFavoritesCountState(prevState => prevState + 1);
    });
  };
  const deleteFavorite = async () => {
    await axiosDelete(`http://localhost:3000/api/articles/${articleSlug}/favorite`, true).then(() => {
      setFavoritedState(false);
      setFavoritesCountState(prevState => prevState - 1);
    });
  };

  const buttonClassName = favoritedState
    ? "btn btn-primary btn-sm pull-xs-right"
    : "btn btn-outline-primary btn-sm pull-xs-right";
  return (
    <button className={buttonClassName} onClick={handleFavoriteClick} data-testid="favorite-article-button">
      <i className="ion-heart" />
      &nbsp;
      {withLabel ? `Favorite post (${favoritesCountState})` : favoritesCountState}
    </button>
  );
};

export default FavoriteArticleButton;
