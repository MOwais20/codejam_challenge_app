import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { db, auth } from "../config/firebase";
import { ref, set, get, child, onValue } from "firebase/database";
import axios from "axios";
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

  const [data, setData] = React.useState([
    {
      "id": 208670,
      "title": "Burger",
      "image": "https://spoonacular.com/productImages/208670-312x231.jpeg",
      "imageType": "jpeg"
    },
    {
      "id": 19686,
      "title": "C.F. Burger Creamery Ultra Pasteurized Half &amp; Half, 1 Pint",
      "image": "https://spoonacular.com/productImages/19686-312x231.jpeg",
      "imageType": "jpeg"
    },
    {
      "id": 19693,
      "title": "C.F. Burger Creamery Ultra Pasteurized Half &amp; Half, 1 Quart",
      "image": "https://spoonacular.com/productImages/19693-312x231.jpeg",
      "imageType": "jpeg"
    },
    {
      "id": 156955,
      "title": "C.F. Burger Creamery Ultra-Pasteurized Heavy Whipping Cream, 8 Fl. Oz.",
      "image": "https://spoonacular.com/productImages/156955-312x231.jpeg",
      "imageType": "jpeg"
    },
    {
      "id": 16503,
      "title": "Hamburger Helper, Cheesy Ranch Burger, 5.9 oz box",
      "image": "https://spoonacular.com/productImages/16503-312x231.png",
      "imageType": "png"
    },
    {
      "id": 80574,
      "title": "Bubba Burger Original,  4lb",
      "image": "https://spoonacular.com/productImages/80574-312x231.jpeg",
      "imageType": "jpeg"
    },
    {
      "id": 598955,
      "title": "Qrunch Burger Green Chile, 4 Pack, Case of 6",
      "image": "https://spoonacular.com/productImages/598955-312x231.jpeg",
      "imageType": "jpeg"
    },
    {
      "id": 513777,
      "title": "Sour Gummy Burger - Mini Gummi Hamburger 60 pieces, Each order has 60 individually wrapped gummi sour burgers By EFruitti",
      "image": "https://spoonacular.com/productImages/513777-312x231.jpeg",
      "imageType": "jpeg"
    },
    {
      "id": 110007,
      "title": "Bubba Burger® Reduced Fat Burgers 8 ct Box",
      "image": "https://spoonacular.com/productImages/110007-312x231.jpeg",
      "imageType": "jpeg"
    },
    {
      "id": 192864,
      "title": "Adams Burgers, Fries &amp; More Multi-Seasoning, 5.54 oz",
      "image": "https://spoonacular.com/productImages/192864-312x231.jpeg",
      "imageType": "jpeg"
    }
  ])
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
        <Box sx={{ height: "100vh" }}>
          <div className="">
            <h1 className="text-2xl font-bold p-5 my-2 drop-shadow-sm bg-slate-200 rounded-2xl">
              Food By Category
            </h1>
          </div>
          {data.map((object) => {
            return <FoodCard image={object?.image} id={object?.id} title={object?.title} />
          })}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FoodByCategory;
