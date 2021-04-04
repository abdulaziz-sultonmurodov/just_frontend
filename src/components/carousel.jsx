import { useState } from "react";
import Carousel, { Dots, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Photo1 from "../img/product/4.jpg";
import Photo2 from "../img/product/6.jpg";
import Photo3 from "../img/product/7.jpg";
import "../styles/carousel.css";
function Carusel() {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
  };
  return (
    <div>
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
        <img className="slide" src={Photo1} />
        <img className="slide" src={Photo2} />
        <img className="slide" src={Photo3} />
      </Carousel>
      <Dots value={value} onChange={onChange} number="3" />
    </div>
  );
}

export default Carusel;
