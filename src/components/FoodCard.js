import React from "react"
import Tilt from 'react-vanilla-tilt'
import LikeButton from "./button"
const FoodCard = (props) => {
    return (
        <>
            <Tilt className="w-2/12 border" id={props?.id} style={{ borderRadius: '10px', backgroundColor: "white", boxShadow: '10px  10px 10px 0px gray' }}>
                <div className="h-max">
                    <img height={100} width={100} className="mx-auto py-10" style={{ objectFit: "contain" }}  alt="food image" src={props?.image} />
                    <h1 className="text-gray-500 text-center underline mb-2">{props?.title}</h1>
                    <div className="flex items-center justify-center py-5">
                        <span className="text-red-400 font-normal">Add to Favorite :</span>
                        <LikeButton objects={{id:props?.id,image:props?.image,title:props?.title}}/>
                    </div>
                </div>
            </Tilt>
        </>
    )
}

export default FoodCard