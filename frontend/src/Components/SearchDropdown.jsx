import { useMemo, useState } from "react";
import InputField from "./InputField";
import { debounce } from "../functions/debounce";
import { getBusinessBySearch } from "../redux/actions/businessAction";
import { useDispatch, useSelector } from "react-redux";
import { formatFirstName } from "../functions/formatFirstName";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const SearchDropdown = ({ setSelectedBusiness }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const { isLoading, searchResult } = useSelector(
    (state) => state?.businessSearchReducer
  );
  const dispatch = useDispatch();

  //   console.log(isLoading, searchResult);

  const handleChange = (e) => {
    const val = e.target.value;
    handleSearch(val);
    setInputVal(val);
    if (val === "") {
      setSelectedBusiness("");
      dispatch({
        type: "SEARCH_BUSINESS_SUCCESS",
        payload: { response: [] }
      });
    }
  };

  const handleSearch = useMemo(
    () =>
      debounce((value) => {
        setSearchTerm(value);
        // console.log("hello from debounce");
        dispatch(getBusinessBySearch(value));
      }, 500),
    []
  );

  const handleSelect = (id) => {
    setSelectedBusiness(id);
    dispatch({
      type: "SEARCH_BUSINESS_SUCCESS",
      payload: { response: [] }
    });
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        dispatch({
          type: "SEARCH_BUSINESS_SUCCESS",
          payload: { response: [] }
        });
      }}
    >
      <div className="w-[300px] relative">
        <InputField
          value={inputVal}
          height="35px"
          placeholder="Search by business name, category, location"
          onChange={handleChange}
        />

        {searchResult?.length !== 0 && (
          <div className="w-[300px] h-auto max-h-[350px] rounded-md overflow-y-auto border border-[var(--border)] absolute top-10 left-0 right-0 bg-[var(--white)]">
            {searchResult?.map((el) => (
              <div
                className="w-full h-8 hover:bg-slate-300 flex items-center justify-start text-xs text-[var(--heading-text)] px-1 font-medium cursor-pointer"
                key={el?._id}
                onClick={() => handleSelect(el?._id)}
              >
                {formatFirstName(
                  `${el?.name} . ${el?.category} . ${el?.location}`
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchDropdown;
