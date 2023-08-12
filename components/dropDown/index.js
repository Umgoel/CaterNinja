import React from "react";
import styles from "@/styles/dropdown.module.scss";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import Image from "next/image";

const DropDown = () => {
  const starter_options = [
    { cat: "Starters", key: "Achari Paneer Tikka" },
    { cat: "Starters", key: "Cajun Spice Potato" },
    { cat: "Starters", key: "Cheesy Triangles" },
    { cat: "Starters", key: "Dahi Ke Kebab" },
    { cat: "Starters", key: "Paneer 65" },
    { cat: "Starters", key: "Honey Chilli Potato" },
    { cat: "Starters", key: "Cheesy Bombs" },
    { cat: "Starters", key: "Hare Bhare Kebab" },
    { cat: "Starters", key: "Paneer Tikka" },
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
      <div className={styles.container}>
      <div className={styles.multidropdownbox}>
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
      <div className={styles.ordersContainer}>
        <ul className={styles.ordersList}>
          <h3 className={styles.selectedOptionsHeading}>Selected Options:</h3>
          {selectedOptions.map((option) => (
            <li key={option.key} className={styles.optionListItem}>
              <span className={styles.optionName}>{option.key}</span>
              {option.isSelected && (
                <>
                  {/* <span className={styles.quantityLabel}>Qty:</span> */}
                  <input
                    className={styles.quantityInput}
                    type="number"
                    value={option.counter || 1}
                    onChange={(e) =>
                      updateCounter(option.key, parseInt(e.target.value, 10))
                    }
                  />
                </>
              )}
              <button
                className={styles.deleteButton}
                onClick={() => onDeleteHandler(option.key)}
              >
                <Image src={"/delete.png"} width={30} height={30} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};

export default DropDown;
