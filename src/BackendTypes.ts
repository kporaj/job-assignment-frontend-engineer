export interface IProfileResponse {
  profile: IProfileFields;
}
export interface IProfileFields {
  username: string;
  image: string;
  bio: string;
  following: boolean;
}

export interface IUserReponse {
  user: IUserFields;
}
export interface IUserFields extends IProfileFields {
  token: string;
}

export interface IArticlesResponse {
  articles: IArticleFields[];
}
export interface IArticleResponse {
  article: IArticleFields;
}
export interface IArticleFields {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IProfileFields;
}
