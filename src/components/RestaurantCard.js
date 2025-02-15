import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-amber-200 overflow-hidden text-ellipsis">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3> {cuisines.join(",")}</h3>
      <h4> {avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
