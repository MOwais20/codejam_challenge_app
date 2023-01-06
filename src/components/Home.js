import React from "react";
import { get, ref, set, onValue } from "firebase/database";
import { db, auth } from "../config/firebase";
import Navbar from "./Navbar";
const FoodCategory = React.lazy(() => import("./FoodByCategory"));

const Home = () => {
  React.useEffect(() => {
    // Get logged In user ID.
    const user_Id = auth?.currentUser?.uid;

    const query = ref(db, "food_app/" + user_Id);
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

  return (
    <div>

      <FoodCategory />
    </div>
  );
};

export default Home;
