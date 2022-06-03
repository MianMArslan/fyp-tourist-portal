import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  IconRightArrow,
  IconMagnifyingGlass
} from "./styles";
import {Data} from "../data"
import "./searchbar.css"
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
  const [open, setOpen] = useState(false);
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");

const handleFilter = (event) => {
  const searchWord = event.target.value;
  setWordEntered(searchWord);
  const newFilter = Data.filter((value) => {
    return value.cityname.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (searchWord === "") {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }
};

const onSuggestHandler = (text) => {
  setWordEntered(text)
  setFilteredData([])
}

  return (
    <div className = "search">
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <SearchInput ref={targetRef} showSearchInput={showSearchInput}
      onChange = {handleFilter}
    value={wordEntered}
      
      />
      {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
    </Container>
    {filteredData.length !== 0 && (
  <div className="dataResult">
    {filteredData.slice(0, 15).map((value, key) => {
      return (
        <>
        <a className="dataItem" target="_blank" key={key} 
        onClick = {() => setOpenDialog(true)}
        // {() => onSuggestHandler(value.cityname)}
        >
          <p>{value.cityname} </p>
          </a>
        </>
      );
    })}

  </div>
)}

 {openDialog && (
          <OpenDialogue
            setOpenDialog={setOpenDialog}
            dialogData={data}
          />
        )}
</div>
  );
}

export default Search;
