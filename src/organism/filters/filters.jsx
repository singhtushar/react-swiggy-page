const Filter = (props) => {
  const { onSearch, onVegOnly } = props;
  return (
    <div className="filters">
      <span className="search-container">
        <i className="fa fa-search"></i>{" "}
        <input
          onChange={(e) => onSearch(e.target.value)}
          className="search-container_input"
          type="text"
          placeholder="Search for dishes..."
        />
      </span>
      <span className="search-container">
        <input
          onClick={(e) => onVegOnly(e.target.checked)}
          className="search-container_input"
          type="checkbox"
        />
        Veg Only
      </span>
      <span className="search-container">
        <input className="search-container_input" type="checkbox" />
        Favourites
      </span>
    </div>
  );
};

export default Filter;
