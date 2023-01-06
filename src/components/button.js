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
  const [active, setActive] = useState(false);

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
    <div style={{ width: "1.2rem" }} className="mx-4 ">
      <Heart isActive={active} onClick={() => SavedorRemove()} />
    </div>
  );
}
