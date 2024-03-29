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
import axios from "axios";

import data from "../data/data";

const FoodByCategory = () => {
  function store_in_db(data) {
    // Get logged In user ID.
    const user_Id = auth?.currentUser?.uid;

    if (user_Id) {
      set(ref(db, "food_app/" + String(user_Id)), {
        ...data,
        userId: user_Id,
      });
    }
  }

  const [data, setData] = React.useState([]);

  const Count = useSelector((state) => state.favorite.favorite);
  console.log(Count);
  React.useEffect(() => {
    const API_key = "04cba2c8ad6e4725992141b100c6b0b6";

    axios
      .get(
        `https://api.spoonacular.com/food/products/search?query=pizza&apiKey=${API_key}`
      )
      .then((res) => {
        setData(res.data.products);
        store_in_db(res.data.products);
        console.log(data);
      });

    // return () => { };
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fluid="true">
        <Box sx={{ height: "100vh" }}>
          <div
            style={{ width: "100%" }}
            className=" text-2xl font-bold p-5 my-2 drop-shadow-sm bg-slate-200 rounded-2xl"
          >
            <h1 className="text-2xl font-bold  drop-shadow-sm rounded-2xl">
              Food By Category
            </h1>
            <span className="float-right " style={{ marginTop: "-1.5rem" }}>
              <Link to="/favorite">
                <span style={{ marginLeft: "-20px" }}>{Count.length}</span>
                <Heart
                  style={{ height: "1.5rem", marginTop: "-30px" }}
                  isActive={true}
                />
              </Link>
            </span>
            <ul className=" p-6 items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Pizza</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Burger</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Biryani</a>
              </li>
            </ul>
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
                />
              );
            })}
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FoodByCategory;
