import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";

export const multiselect = () => {
  const [food, setFood] = useState([
    { cat: "Starters", key: "Achari Paneer Tikka" },
    { cat: "Starters", key: "Cajun Spice Potato" },
    { cat: "Starters", key: "Cheesy Triangles" },
    { cat: "Starters", key: "Dahi Ke Kebab" },
  ]);

  return (
    <div>
      <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={food}
        showCheckbox
      />
    </div>
  );
};