const IncrementDecrement = ({
  onIncrement,
  onDecrement,
  incrementDisabled,
  decrementDisabled,
}: any) => {
  return (
    <div className="increment-decrement-btn">
      <button
        className="increment-btn"
        onClick={onIncrement}
        disabled={incrementDisabled}
      >
        +
      </button>
      <button
        className="decrement-btn"
        onClick={onDecrement}
        disabled={decrementDisabled}
      >
        -
      </button>
    </div>
  );
};

export default IncrementDecrement;
