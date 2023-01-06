import React from "react";
import { get, ref, set } from "firebase/database";
import db from "../config/firebase";

const Home = () => {
  function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, "test/" + 1001), {
      username: "mowais",
      email: "abc@gmail.com",
      profile_picture: "/",
    });
  }

  const postListRef = ref(db, "/");

  console.log("🚀 ~ file: Home.js:17 ~ data ~ data", postListRef);

  return <div>Home</div>;
};

export default Home;
