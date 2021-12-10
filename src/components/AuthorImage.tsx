import React from "react";

interface AuthorImageProps {
  imageUrl?: string;
  className?: string;
}

const AuthorImage: React.FC<AuthorImageProps> = ({ imageUrl, className }) => {
  const avatarUrl = imageUrl || "/avatarPlaceholder.png";

  return <img src={avatarUrl} className={className} data-testid="author-image" />;
};

export default AuthorImage;
