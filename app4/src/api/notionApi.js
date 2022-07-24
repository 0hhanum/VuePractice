const getDBData = async () => {
  const data = await fetch("/notion/database/read").then((response) =>
    response.json()
  );
  return data;
};

export { getDBData };
