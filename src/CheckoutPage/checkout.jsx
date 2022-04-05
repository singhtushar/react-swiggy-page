const Checkout = (props) => {
  const { cart } = props;
  console.log(cart);
  return (
    <>
      <h1>Ordered Successfully</h1>
      <h1>Items Ordered: </h1>
      <ul>
        {cart !== undefined &&
          cart.length !== 0 &&
          cart.map((item) => {
            return (
              <li>
                {item.Name} x {item.count}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Checkout;
