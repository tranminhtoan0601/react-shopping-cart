import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import ProductList from "./component/StoreList";
// import productlist from "./data.json";

Store.propTypes = {};

function Store(props) {
  const productlist = [
    {
      id: 1,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa547-2Y4zAuSkPm0tZKc8jpwq1t2xtnJOfA&usqp=CAU",
      title: "Buffalo - Striploin",
      price: "$39.11",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
    // {
    //   id: 2,
    //   thumbnail: "https://react-shooping-cart.netlify.app/img/5.jpg?v=5",
    //   title: "Bacardi Breezer - Tropical",
    //   price: "$257.92",
    //   button: "DETAILS",
    //   button1: "ADD TO CART",
    // },
    {
      id: 3,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ33vbODQS0bBubslqfb_sSDpI5_SXUkKekAQ&usqp=CAU",
      title: "Wine - Gato Negro Cabernet",
      price: "$51.01",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
    {
      id: 4,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwq_-5MJhGwtGL9TZ0PJKh_z0wpYgTzIY5Q&usqp=CAU",
      title: "Cabbage - Nappa",
      price: "$250.90",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
    {
      id: 5,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7AeoNUTmNKEO_lBq8vuDyMS4rnozCqFloA&usqp=CAU",
      title: "Sping Loaded Cup Dispenser",
      price: "$175.85",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
    {
      id: 6,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2WS3TeQv2_EyqMaOyFrSucdCWjIBsj4t0w&usqp=CAU",
      title: "Bread - Malt",
      price: "$82.61",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
    {
      id: 7,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQQzduGNL8XNovR9MunB-XyPjQdlywDQKmg&usqp=CAU",
      title: "Glass Clear 8 Oz",
      price: "$201.10",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
    {
      id: 8,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSyOOCxEA7jPSgbnZcq6nnDd2Of9m4Mxx5mA&usqp=CAU",
      title: "Sping Loaded Cup Dispenser",
      price: "$134,.99",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
    {
      id: 9,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yG9Zz6Smzfm5pp11pR0ijPP_N5LuFALDzg&usqp=CAU",
      title: "Pork - Chop, Frenched",
      price: "$199.16",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
    {
      id: 10,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuL_WKH7vbwya8GI1UgKvmUHdr_Nj4SPXNw&usqp=CAU",
      title: "Sping Loaded Cup Dispenser",
      price: "$123.82",
      button: "DETAILS",
      button1: "ADD TO CART",
    },
  ];
  return (
    <Box>
      <Box textAlign="center">
        <Heading fontSize="50px" color="black">
          {" "}
          STORE
        </Heading>
        <Heading fontSize="20px" color="gray">
          {" "}
          This is Store Page
        </Heading>
      </Box>
      {<ProductList productlist={productlist} />}
    </Box>
  );
}

export default Store;
