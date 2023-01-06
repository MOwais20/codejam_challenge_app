import React, { useState } from "react";
import Heart from "react-heart";
import { db, auth } from "../config/firebase";
import {
  AddtoFavorite,
  RemoveFromFavorite,
} from "../Redux/Reducers/favorite.reducer";
import { get, ref, set, onValue } from "firebase/database";
import { useDispatch } from "react-redux";

export default function LikeButton(props) {
  const dispatch = useDispatch();
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
  const [active, setActive] = useState(props.isactive);

  const SavedorRemove = async () => {
    if (active) {
      dispatch(RemoveFromFavorite(props.objects));
      setActive(false);
    } else {
      dispatch(AddtoFavorite(props.objects));
      setActive(true);
    }
  };

  return (
    <div className="flex items-center border-solid border-2 border-red-200 justify-center py-2 px-1 rounded-lg cursor-pointer">
      <span className="text-red-400 text-md font-normal">Add / Remove</span>
      <div style={{ width: "1.2rem" }} className="mx-4 ">
        <Heart isActive={active} onClick={() => SavedorRemove()} />
      </div>
    </div>
  );
}
