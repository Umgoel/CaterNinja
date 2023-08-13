import React from "react";
import styles from "@/styles/dropdown.module.scss";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import Image from "next/image";

const DropDown = () => {
  const starter_options = [
    { cat: "Veg", key: "Achari Paneer Tikka" },
    { cat: "Veg", key: "Cajun Spice Potato" },
    { cat: "Veg", key: "Cheesy Triangles" },
    { cat: "Veg", key: "Dahi Ke Kebab" },
    { cat: "Veg", key: "Paneer Kebab" },
    { cat: "Non-Veg", key: "Chicken 65" },
    { cat: "Non-Veg", key: "Chicken Chilli" },
    { cat: "Non-Veg", key: "Cheesy Chicken" },
    { cat: "Non-Veg", key: "Chicken Kebab" },
    { cat: "Non-Veg", key: "Chicken Tikka" },
  ];

  const [food, setFood] = useState(starter_options);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filterValue, setFilterValue] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
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

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilterValue(selectedFilter);

    if (selectedFilter === "All") {
      setFood(starter_options);
    } else {
      const filteredFood = starter_options.filter(
        (item) => item.cat === selectedFilter
      );
      setFood(filteredFood);
    }
  };
  const filteredOptions = filterValue === "All" ?
    starter_options :
    starter_options.filter(option => option.cat === filterValue);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          {/* <label>
            <input
              type="radio"
              value="All"
              checked={filterValue === "All"}
              onChange={handleFilterChange}
            />
            All
          </label> */}
          <label style={{color:"green"}}>
            <input
              type="radio"
              value="Veg"
              checked={filterValue === "Veg"}
              onChange={handleFilterChange}
            />
            Veg
          </label>
          <label style={{color:"red"}}>
            <input
              type="radio"
              value="Non-Veg"
              checked={filterValue === "Non-Veg"}
              onChange={handleFilterChange}
            />
            Non-Veg
          </label>
        </div>
        {isDropdownOpen && (
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
        )}
         {isDropdownOpen && (
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
        )}
        <button className={styles.closeButton} onClick={toggleDropdown}>
          Done
        </button>
      </div>
    </>
  );
};

export default DropDown;
