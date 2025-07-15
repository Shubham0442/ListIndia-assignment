import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBusinesses } from "../../redux/actions/businessAction";
import {
  BusinessCard,
  Loader,
  NoData,
  PageHeading,
  SearchDropdown
} from "../../Components";

const Home = () => {
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const dispatch = useDispatch();
  const { isLoading, allBusinesses } = useSelector(
    (state) => state?.businessReducer
  );

  console.log("isLoading", isLoading, "allBusinesses", allBusinesses);

  const getAllBusinessesData = () => {
    dispatch(getAllBusinesses(selectedBusiness));
  };

  useEffect(() => {
    getAllBusinessesData(selectedBusiness);
  }, [selectedBusiness]);

  return (
    <div className="w-full h-auto pb-5">
      <PageHeading heading="Welcome to Business World!" />
      <div className="w-full h-auto flex items-center justify-center">
        <SearchDropdown setSelectedBusiness={setSelectedBusiness} />
      </div>
      <div className="w-full h-auto mt-5">
        {isLoading ? (
          <div className="w-full h-[400px] flex items-center justify-center">
            <Loader />
          </div>
        ) : !isLoading && allBusinesses?.length !== 0 ? (
          <div className="w-full h-auto flex items-center justify-center gap-4 flex-wrap">
            {allBusinesses?.map((business) => (
              <div
                className="lg:w-[23%] md:w-[40%] sm:w-[90%] sx:w-[95%]"
                key={business?._id}
              >
                <BusinessCard business={business} />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[400px] flex items-center justify-center">
            <NoData />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
