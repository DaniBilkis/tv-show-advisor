// import s from "./style.module.css";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  const starList = [];

  const starFillCount = Math.floor(rating);

  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  const emptyStarCout = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasHalfStar) {
    starList.push(<StarHalf key={"half-star"} />);
  }

  for (let i = 1; i <= emptyStarCout; i++) {
    starList.push(<StarEmpty key={"empty-star" + i} />);
  }

  return <div>{starList}</div>;
}
