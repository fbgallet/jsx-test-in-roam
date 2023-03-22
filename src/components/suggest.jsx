import React, { useState, useCallback } from "react";
import { Suggest } from "@blueprintjs/select";
import { MenuItem, minimal } from "@blueprintjs/core";
export default function SelectSuggest({ onItemSelect }) {
  const items = [
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
  ];
  const [value, setValue] = useState(items.title);

  const handleItemRenderer = (item, { modifiers, handleClick }) => (
    <MenuItem
      active={modifiers.active}
      onClick={handleClick}
      text={item.title}
      key={item.year}
    />
  );
  const handleInputValueRenderer = (inputValue) => inputValue.title;

  const handleFilterItems = (query, item, index, exactMatch) => {
    const Title = item.title.toLowerCase();
    const Query = query.toLowerCase();

    if (exactMatch) {
      return Title === query;
    } else {
      return Title.indexOf(Query) >= 0;
    }
  };

  return (
    <Suggest
      inputValueRenderer={handleInputValueRenderer}
      items={items}
      itemRenderer={handleItemRenderer}
      itemPredicate={handleFilterItems}
      onItemSelect={(value) => setValue(value)}
      // selectedItem={{}}
      // closeOnSelect={false}
      // openOnKeyDown={true}
      inputProps={{ placeholder: "Select items" }}
    />
  );
}
