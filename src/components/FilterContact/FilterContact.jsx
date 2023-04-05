const FilterContact = ({ filter, handelFilter }) => {
  return (
    <>
      <label className="filterLabel">
        Find
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handelFilter}
          className="inputFilter"
        />
      </label>
    </>
  );
};

export default FilterContact;
