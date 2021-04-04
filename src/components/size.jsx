import "../styles/size.css";

function Size() {
  return (
    <div>
      <h3 className="font-secondary darkGrey font-21">Razmer</h3>
      <div>
        <button className="size-btn pointer mr-5 font-17 darkGrey">S</button>
        <button className="size-btn pointer mr-5 font-17 darkGrey">M</button>
        <button className="size-btn pointer mr-5 font-17 darkGrey">L</button>
        <button className="size-btn pointer mr-5 font-17 darkGrey">XL</button>
        <button className="size-btn pointer mr-5 font-17 darkGrey">XXL</button>
      </div>
    </div>
  );
}

export default Size;
