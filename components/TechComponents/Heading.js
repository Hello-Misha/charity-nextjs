function Heading({ tag, text }) {
  const Tag = tag || "h1";
  return <Tag className="Title DarkBlue">{text}</Tag>;
}

export default Heading;
