export interface Post {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: string;
  popular: boolean;
  favorites: boolean;
  likesCount: number;
  dislikesCount: number;
  isLiked: boolean;
  isDisliked: boolean;
}