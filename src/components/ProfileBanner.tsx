import { IProfileFields } from "BackendTypes";
import React from "react";
import AuthorImage from "./AuthorImage";
import FollowAuthorButton from "./FollowAuthorButton";

type ProfileBannerProps = Pick<IProfileFields, "username" | "bio" | "image" | "following">;

const ProfileBanner: React.FC<ProfileBannerProps> = ({ username, bio, image, following }) => {
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <AuthorImage imageUrl={image} className={"user-img"} />
            <h4>{username}</h4>
            <p>{bio}</p>
            <FollowAuthorButton authorUsername={username} followed={following} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
