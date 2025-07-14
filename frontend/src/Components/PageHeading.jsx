const PageHeading = ({ heading = "" }) => {
  return (
    <div className="w-full h-24 flex items-center justify-center text-center text-lg text-[var(--heading-text)] font-bold">
      {heading}
    </div>
  );
};

export default PageHeading;
