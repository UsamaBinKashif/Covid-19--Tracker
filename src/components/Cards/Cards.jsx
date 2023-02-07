const Cards = (props) => {
  const { border, title, numbers, description } = props;
  return (
    <section className="p-4">
      <div
        className={`border-b-8 ${border} h-1/2 bg-gray-200 bg-opacity-75 p-10 rounded shadow-xl text-center`}
      >
        <h2 className="tracking-widest text-xs title-font font-bold text-gray-600 mb-3 uppercase">
          {title}
        </h2>
        <h1 className="title-font sm:text-xl text-xl text-gray-900 mb-3 font-bold">
          {numbers}
        </h1>
        <p className="text-sm ">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Cards;
