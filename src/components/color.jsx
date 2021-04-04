import "../styles/color.css";

function Color() {
  return (
    <div class="color-dropdown pointer mr-20">
      <button class="color-dropbtn white fontSecondary font-15 uppercase">
        Svet
      </button>
      <div class="dropdown-content">
        <a href="#">Red</a>
        <a href="#">Blue</a>
        <a href="#">Green</a>
      </div>
    </div>
  );
}

export default Color;
