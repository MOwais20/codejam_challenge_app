import React from "react";
import { get, ref, set, onValue } from "firebase/database";
import { db } from "../config/firebase";

const Home = () => {
  //   function writeUserData(userId, name, email, imageUrl) {
  //     set(ref(db, "test/" + 1001), {
  //       username: "mowais",
  //       email: "abc@gmail.com",
  //       profile_picture: "/",
  //     });
  //   }

  React.useEffect(() => {
    const query = ref(db, "food_app");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log("🚀 ~ file: Home.js:18 ~ returnonValue ~ data", data);

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          //   console.log("🚀 ~ file: Home.js:21 ~ Object.values ~ data", data);
        });
      }
    });
  }, []);

  return <div>Home</div>;
};

export default Home;
