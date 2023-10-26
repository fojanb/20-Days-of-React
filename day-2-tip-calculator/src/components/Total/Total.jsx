const Total = ({ changeHandler }) => {
  return (
    <input
      type="number"
      name="total"
      min={0}
      placeholder="Total price before tip"
      onChange={changeHandler}
    />
  );
};
export default Total;
