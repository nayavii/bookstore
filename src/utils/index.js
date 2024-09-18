import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} style={{ color: "#8aaae6" }} />);
    } else {
      stars.push(<StarBorderIcon key={i} style={{ color: "#8aaae6" }} />);
    }
  }
  return stars;
};
