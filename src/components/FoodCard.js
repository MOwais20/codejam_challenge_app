import React from "react";
import Tilt from "react-vanilla-tilt";
import LikeButton from "./button";
const FoodCard = (props) => {
  return (
    <>
      <Tilt
        className="w-52 border m-2"
        id={props?.id}
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "10px 10px 10px 0px gray",
        }}
      >
        <div className="h-max p-2">
          <div className="w-full border-solid border-2 border-gray-200 ">
            <img
              height={100}
              width={100}
              className="mx-auto py-10"
              style={{ objectFit: "contain" }}
              alt="food image"
              src={props?.image}
            />
          </div>
          <h1 className="text-gray-500 text-center font-bold text-slate-700	 mb-2">
            {props?.title?.substring(5, 45) + "..."}
          </h1>
          {/* <Card> */}
          <div className="flex items-center justify-center py-5">
            <span className="text-red-400 font-normal">Add to Favorite </span>
            <LikeButton />
          </div>
          {/* </Card> */}
        </div>
      </Tilt>
    </>
  );
};

export default FoodCard;
