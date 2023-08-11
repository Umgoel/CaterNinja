import React from "react";
import styles from "@/styles/Home.module.scss";
import Multiselect from "multiselect-react-dropdown";
// const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

const dropDown = () => {
  const starter_options = [
    { cat: "Starters", key: "Achari Paneer Tikka" },
    { cat: "Starters", key: "Cajun Spice Potato" },
    { cat: "Starters", key: "Cheesy Triangles" },
    { cat: "Starters", key: "Dahi Ke Kebab" },
  ];

  const [food, setFood] = useState(starter_options);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelectHandler = (selectedList, selectedItem) => {
    const updatedSelectedOptions = selectedList.map((option) => {
      const existingOption = selectedOptions.find(
        (item) => item.key === option.key
      );
      if (existingOption) {
        return { ...existingOption, isSelected: true };
      }
      return { ...option, isSelected: true, counter: 1 };
    });

    setSelectedOptions(updatedSelectedOptions);
  };

  const updateCounter = (key, newCounter) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.map((item) =>
        item.key === key ? { ...item, counter: newCounter } : item
      )
    );
  };
  const onDeleteHandler = (key) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item.key !== key)
    );
  };
  return (
    <>
      <div>
        <Multiselect
          displayValue="key"
          hideSelectedList
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={onSelectHandler}
          options={food}
          showCheckbox
          selectedValues={selectedOptions} // Passing the selectedOptions to display checked options
        />
      </div>
      <div>
        <ul>
          <h3>Selected Options:</h3>
          {selectedOptions.map((option) => (
            <li key={option.key}>
              {option.key}
              {option.isSelected && ( // Only render counter if the item is selected
                <>
                  {" - Qty  :  "}
                  <input
                    type="number"
                    value={option.counter || 1}
                    onChange={(e) =>
                      updateCounter(option.key, parseInt(e.target.value, 10))
                    }
                  />
                </>
              )}
              <button onClick={() => onDeleteHandler(option.key)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default dropDown;
