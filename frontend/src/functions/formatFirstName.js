const formatFirstName = (firstname) => {
  const candidateName = firstname?.split(" ");

  if (candidateName?.length > 1) {
    let nameStr = "";
    for (let i = 0; i < candidateName?.length; i++) {
      nameStr =
        nameStr +
        candidateName[i]?.charAt(0)?.toUpperCase() +
        candidateName[i]?.slice(1).toLowerCase() +
        " ";
    }
    return nameStr;
  }
  return (
    firstname?.charAt(0)?.toUpperCase() + firstname?.slice(1).toLowerCase()
  );
};

export { formatFirstName };
