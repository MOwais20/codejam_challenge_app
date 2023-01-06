import React, { useState } from "react";
import Heart from "react-heart"
import { db, auth } from "../config/firebase";
import { AddtoFavorite, RemoveFromFavorite } from "../Redux/Reducers/favorite.reducer";


export default function LikeButton(props) {
    function store_in_db(userId, data) {
        // Get logged In user ID.
        const user_Id = auth?.currentUser?.uid;

        if (userId) {
            set(ref(db, "food_app/" + String(user_Id)), {
                ...data,
                userId: user_Id,
            });
        }
    }
    const [active, setActive] = useState(false)
    const SavedorRemove = async (props) => {    
        if (active) {
            RemoveFromFavorite(props.object)
            setActive(false)
        }else{
            AddtoFavorite(props.object)
            setActive(true)
        }    
    }
    return (
        <div style={{ width: "1.2rem" }} className="mx-4 ">
            <Heart isActive={active} onClick={() => setActive(!active)} />
        </div>
    );
}
