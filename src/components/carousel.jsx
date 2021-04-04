import { useState } from "react";
import Carousel, { Dots, autoplayPlugin } from "@brainhubeu/react-carousel";
import "../styles/carousel.css";
import "@brainhubeu/react-carousel/lib/style.css";

function Carusel() {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
  };
  
  return (
    <div className="mb-50">
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
        animationSpeed={1000}
      >
        <img className="slide" src="https://cdn.shopify.com/s/files/1/1869/0703/files/SS21_Editorial_Category_BestSeller.jpg?v=1614727453" />
        <img className="slide" src="https://cdn.shopify.com/s/files/1/1869/0703/files/SS21_Editorial_Category_Pants.jpg?v=1614609361" />
        <img className="slide" src="https://cdn.shopify.com/s/files/1/1869/0703/files/SS21_Editorial_Category_Tee.jpg?v=1614609361" />
      </Carousel>
      <Dots value={value} onChange={onChange} number="3" />
    </div>
  );
}

export default Carusel;
