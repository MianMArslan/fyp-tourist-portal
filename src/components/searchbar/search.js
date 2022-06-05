import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  IconRightArrow,
  IconMagnifyingGlass,
} from "./styles";
import { Data } from "../data";
import "./searchbar.css";
import OpenDialogue from "../SelectItem";

function Search() {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  const [data, setData] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [selectedData, setSelectedData] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = Data.filter((value) => {
      return value.cityName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const onSuggestHandler = (text) => {
    setWordEntered(text);
    setData();
    setFilteredData([]);
  };

  return (
    <div className="search">
      <Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hover={showSearchInput}
      >
        <SearchInput
          ref={targetRef}
          showSearchInput={showSearchInput}
          onChange={handleFilter}
          value={wordEntered}
        />
        {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
      </Container>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <>
                <a
                  className="dataItem"
                  target="_blank"
                  key={key}
                  onClick={() => {
                    setSelectedData(value);
                    setOpenDialog(true);
                    onSuggestHandler(value.cityName);
                  }}
                  // {() => onSuggestHandler(value.cityName)}
                >
                  <p>{value.cityName} </p>
                </a>
              </>
            );
          })}
        </div>
      )}

      {openDialog && (
        <OpenDialogue setOpenDialog={setOpenDialog} dialogData={selectedData} />
      )}
    </div>
  );
}

export default Search;
