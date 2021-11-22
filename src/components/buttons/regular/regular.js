import "./regular.scss";

export default ({ text, style, type, func }) => {
  return (
    <button
      onClick={(e) => {
        func(e);
      }}
      style={style}
      className={type ? type + " regular" : "regular"}
    >
      {text}
    </button>
  );
};
