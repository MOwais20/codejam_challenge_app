import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { db, auth } from "../config/firebase";
import { ref, set, get, child, onValue } from "firebase/database";

import FoodCard from "./FoodCard";

const FoodByCategory = () => {
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

  React.useEffect(() => {
    store_in_db();

    return () => {};
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fluid="true">
        <Box sx={{ height: "100vh" }}>
          <div>
            <h1 className="text-2xl font-bold p-5 my-2 drop-shadow-sm bg-slate-200 rounded-2xl">
              Food By Category
            </h1>

            <div
              className="flex flex-wrap align-center"
              style={{ justifyContent: "space-around" }}
            >
              {[1, 2, 3, 4].map((el) => (
                <FoodCard />
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FoodByCategory;
