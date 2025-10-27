import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Cards, Policies, Title } from "../../components";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products.slice(0, 10));
  }, []);

  console.log(products);
  return (
    <>
      <div>
        {/*LATEST COLLECTION */}
        <div className="text-center py-8 text-3xl">
          <Title textOne={"LATEST"} textTwo={"COLLECTIONS"} />
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm">
            Discover the newest additions to our collection. From trendy apparel
            to stylish accessories, find the perfect pieces to elevate your
            wardrobe.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 cardResponsive">
          {productsData?.map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

        {/*TRENDING COLLECTION */}
        <div className="text-center py-8 text-3xl">
          <Title textOne={"TRENDING"} textTwo={"COLLECTIONS"} />
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm">
            Discover our trending collection which will be the perfect pieces to
            elevate your wardrobe.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 cardResponsive">
          {productsData?.slice(0, 5).map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
        <Policies />
      </div>
    </>
  );
};

export default LatestCollections;
