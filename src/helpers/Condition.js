const Noop = () => null;

const Condition = ({ condition, children, elseChildren = Noop }) => {
  return condition ? children : elseChildren;
};

export default Condition;
