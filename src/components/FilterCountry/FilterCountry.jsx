import React from "react";

const FilterCountry = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <div className="w-[100%] flex justify-end">
      <select onChange={selectHandler} className="p-1 m-5" >
        <option>Filter by Region</option>
        <option value="Africa">
          Africa
        </option>
        <option value="America">
          America
        </option>
        <option value="Asia">
          Asia
        </option>
        <option value="Europe">
          Europe
        </option>
        <option value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
};

export default FilterCountry;
