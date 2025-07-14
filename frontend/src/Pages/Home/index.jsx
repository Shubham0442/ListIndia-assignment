import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBusinesses } from "../../redux/actions/businessAction";
import { InputField, PageHeading } from "../../Components";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, allBusinesses } = useSelector(
    (state) => state?.businessReducer
  );

  console.log(isLoading, allBusinesses);

  const getAllBusinessesData = () => {
    dispatch(getAllBusinesses(selectedBusiness));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getAllBusinessesData();
  }, []);

  return (
    <div className="w-full h-auto m-auto px-4">
      <PageHeading heading="Welcome to Business World!" />
      <div className="w-full h-auto flex items-center justify-center">
        <div className="w-[300px]">
          <InputField
            value={searchTerm}
            height="35px"
            placeholder="Search by business name, category, location"
            onChange={handleSearch}
          />
          {openDropdown && (
            <div className="w-[300px] h-[300px] overflow-y-auto border border-[var(--border)]"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
