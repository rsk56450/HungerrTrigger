const ItemList = (items) => {
  // console.log("props is " , items);

  const imgSrc =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  return (
    <>
      <div>
        {items.items.map((i) => {
          return (
            <div className="p-2 m-2 border-b-4 text-left flex ">
              <div>
                <div className="w-4/5 ">
                  <span>
                    {i.card.info.imageId ? (
                      <img
                        src={imgSrc + i.card.info.imageId}
                        className="w-20 h-20"
                      ></img>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <span className="my-8 py-2 font-semibold">
                  {i.card.info.name} -{" "}
                </span>
                <span className="my-8 font-semibold">
                  ₹{" "}
                  {i.card.info.price
                    ? i.card.info.price / 100
                    : i.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="my-4 text-xs">{i.card.info.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ItemList;
