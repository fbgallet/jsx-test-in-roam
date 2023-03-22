import { Button, MenuItem } from "@blueprintjs/core";
import { ItemPredicate, ItemRenderer, Select } from "@blueprintjs/select";
import React from "react";
import ReactDOM from "react-dom";

// export interface Film {
//     title: string;
//     year: number;
//     rank: number;
// }

const TOP_100_FILMS = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  // ...
].map((f, index) => ({ ...f, rank: index + 1 }));

const filterFilm = (query, film, _index, exactMatch) => {
  const normalizedTitle = film.title.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  if (exactMatch) {
    return normalizedTitle === normalizedQuery;
  } else {
    return (
      `${film.rank}. ${normalizedTitle} ${film.year}`.indexOf(
        normalizedQuery
      ) >= 0
    );
  }
};

const renderFilm = (film, { handleClick, handleFocus, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      key={film.rank}
      label={film.year.toString()}
      onClick={handleClick}
      onFocus={handleFocus}
      roleStructure="listoption"
      text={`${film.rank}. ${film.title}`}
    />
  );
};

export default function FilmSelect() {
  const [selectedFilm, setSelectedFilm] = React.useState();
  return (
    <Select
      items={TOP_100_FILMS}
      itemPredicate={filterFilm}
      itemRenderer={renderFilm}
      noResults={
        <MenuItem
          disabled={true}
          text="No results."
          roleStructure="listoption"
        />
      }
      onItemSelect={setSelectedFilm}
    >
      <Button
        text={selectedFilm?.title}
        rightIcon="double-caret-vertical"
        placeholder="Select a film"
      />
    </Select>
  );
}

const getCoords = (t) => {
  let properties = [
    "direction",
    "boxSizing",
    "width",
    "height",
    "overflowX",
    "overflowY",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "fontStretch",
    "fontSize",
    "fontSizeAdjust",
    "lineHeight",
    "fontFamily",
    "textAlign",
    "textTransform",
    "textIndent",
    "textDecoration",
    "letterSpacing",
    "wordSpacing",
  ];
  const div = document.createElement("div");
  div.id = "input-textarea-caret-position-mirror-div";
  document.body.appendChild(div);

  const style = div.style;
  const computed = getComputedStyle(t);

  style.whiteSpace = "pre-wrap";
  style.wordWrap = "break-word";

  // position off-screen
  style.position = "absolute";
  style.visibility = "hidden";
  style.overflow = "hidden";

  // transfer the element's properties to the div
  properties.forEach((prop) => {
    style[prop] = computed[prop];
  });

  div.textContent = t.value.substring(0, t.selectionStart);

  const span = document.createElement("span");
  span.textContent = t.value.substring(t.selectionStart) || ".";
  div.appendChild(span);

  const doc = document.documentElement;
  const windowLeft =
    (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const windowTop =
    (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  const coordinates = {
    top:
      windowTop +
      span.offsetTop +
      parseInt(computed.borderTopWidth) +
      parseInt(computed.fontSize) -
      t.scrollTop -
      9,
    left: windowLeft + span.offsetLeft + parseInt(computed.borderLeftWidth) - 1,
  };
  document.body.removeChild(div);
  return coordinates;
};

// export function displaySelect(target) {
//   console.log(target.parentNode);
//   const roamBlock = target.parentNode.parentNode.parentNode;
//   const parent = document.createElement("span");
//   const coords = getCoords(target);
//   parent.style.position = "absolute";
//   parent.style.zIndex = "10";
//   parent.style.boxShadow =
//     "0 0 0 1px rgb(16 22 26 / 10%), 0 2px 4px rgb(16 22 26 / 20%), 0 8px 24px rgb(16 22 26 / 20%)";
//   parent.style.border = "1px solid rgb(213,218,222)";
//   parent.style.width = "400px";
//   parent.style.left = `${coords.left + 20}px`;
//   parent.style.top = `${coords.top + 20}px`;
//   target.appendChild(parent);
//   ReactDOM.render(<FilmSelect />, parent);
// }
