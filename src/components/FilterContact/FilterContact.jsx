const FilterContact = ({ filter, handelChange }) => {
  return (
    <>
      <label className="filterLabel">
        Find
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handelChange}
          className="inputFilter"
        />
      </label>
    </>
  );
};

export default FilterContact;
