const SearchBoxView = ({ fixed, refs }) => (
  <section className="container" ref={refs.getSearchBar}>
    <div className="row">
      <div className="col-sm-12">
        <input
          className={`search-box ${fixed ? 'search-box_fixed' : null}`}
          placeholder="Поиск"
        >
        </input>
      </div>
    </div>
  </section>
);
