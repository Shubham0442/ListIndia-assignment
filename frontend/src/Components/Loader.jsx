import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default Loader;
