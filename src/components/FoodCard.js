import React from "react";
import Tilt from "react-vanilla-tilt";
import LikeButton from "./button";
const FoodCard = (props) => {
  function truncate_text(text) {
    if (text?.length > 10) {
      return (
        <h1 className="text-gray-500 text-center font-bold text-slate-700	 mb-2">
          {text?.substring(5, 45) + "..."}
        </h1>
      );
    }
    return (
      <h1 className="text-gray-500 text-center font-bold text-slate-700	 mb-2">
        {text}
      </h1>
    );
  }

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
          <div className="w-full rounded-lg border-solid border-2 border-gray-200 ">
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
            {truncate_text(props.title)}
          </h1>
          {/* <Card> */}
          <div className="flex items-center border-solid border-2 border-red-200 justify-center py-2 px-1 rounded-lg cursor-pointer">
            <span className="text-red-400 text-md font-normal">
              Add / Remove
            </span>
            <LikeButton isactive={props.isactive?true:false} objects={{id:props?.id,image:props?.image,title:props?.title}}/>
          </div>
          {/* </Card> */}
        </div>
      </Tilt>
    </>
  );
};

export default FoodCard;
