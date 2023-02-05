function Product(props) {
  return (
    <div>
      <img src={props.img} alt="products" />
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <h4>{props.price}</h4>
    </div>
  );
}

export default Product;
