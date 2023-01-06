import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { db, auth } from "../config/firebase";
import { ref, set, get, child, onValue } from "firebase/database";
import FoodCard from "./FoodCard";
import Heart from "react-heart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
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

  const data = useSelector((state) => state.favorite.favorite);
  React.useEffect(() => {
    store_in_db();
    // // axios.get('https://api.spoonacular.com/food/products/search?query=pizza&apiKey=f420c936bac54c61b8a9bb6d6d04e525').then((res) => {
    // //   setData(res.data.products)
    // //   console.log(data)
    // // })
    // return () => { };
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fluid="true">
        <Box sx={{ height: "100%" }}>
          <div
            style={{ width: "100%" }}
            className=" text-2xl font-bold p-5 my-2 drop-shadow-sm bg-slate-200 rounded-2xl"
          >
            <h1 className="text-2xl font-bold  drop-shadow-sm rounded-2xl">
              Favorites
            </h1>
            <span className="float-right " style={{ marginTop: "-1.5rem" }}>
              <Link to={"/favorite"}>
                <span style={{ marginLeft: "-20px" }}>{data.length}</span>
                <Heart
                  style={{ height: "1.5rem", marginTop: "-30px" }}
                  isActive={true}
                />
              </Link>
            </span>
            {/* <div
              className="flex flex-wrap align-center"
              style={{ justifyContent: "space-around" }}
            >
              {[1, 2, 3, 4].map((el) => (
                <FoodCard />
              ))}
            </div> */}
          </div>
          <div
            className="flex flex-wrap align-center"
            style={{ justifyContent: "space-around" }}
          >
            {data.map((object, obj_index) => {
              return (
                <FoodCard
                  key={obj_index}
                  image={object?.image}
                  id={object?.id}
                  title={object?.title}
                  isactive={true}
                />
              );
            })}
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Favorites;
