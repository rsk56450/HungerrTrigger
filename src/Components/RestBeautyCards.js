const ResMenuBeautify = (props) => {
  const { name, cuisines, costForTwoMessage } = props;
  return (
    <>
      <div className="Hotel-Details-Container">
        <div className="MainHeading">
          <h1 className="font-bold">{name}</h1>
          <h2>{cuisines}</h2>
          <h3>{costForTwoMessage}</h3>
        </div>
        <div className="Menu_items">
          <h2>Menu</h2>
          <ul>
            <li>Item 1</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResMenuBeautify;
