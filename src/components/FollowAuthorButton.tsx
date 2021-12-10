import { axiosDelete, axiosPost } from "BackendHelper";
import React, { useState } from "react";

interface FollowAuthorButtonProps {
  authorUsername: string;
  followed: boolean;
}

const FollowAuthorButton: React.FC<FollowAuthorButtonProps> = ({ followed, authorUsername }) => {
  // TODO - See note left in FavoriteArticleButton
  const [followedState, setFollowedState] = useState<boolean>(followed);

  const handleFollowClick = () => {
    if (!followedState) {
      postFollow();
    } else {
      deleteFollow();
    }
  };

  const postFollow = async () => {
    await axiosPost(`http://localhost:3000/api/profiles/${authorUsername}/follow`, true).then(() =>
      setFollowedState(true)
    );
  };
  const deleteFollow = async () => {
    await axiosDelete(`http://localhost:3000/api/profiles/${authorUsername}/follow`, true).then(() =>
      setFollowedState(false)
    );
  };

  return (
    <button className="btn btn-sm btn-outline-secondary" onClick={handleFollowClick}>
      <i className="ion-plus-round" />
      &nbsp;
      {`${followedState ? "Unfollow" : "Follow"} ${authorUsername}`}
    </button>
  );
};

export default FollowAuthorButton;
