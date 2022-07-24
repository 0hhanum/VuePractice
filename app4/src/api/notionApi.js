const getDBData = async () => {
  const data = await fetch("/notion/database/read").then((response) =>
    response.json()
  );
  return data;
};

const writeData = async (id, mood, sleep) => {
  await fetch("/notion/database/write", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      mood: mood,
      sleep: sleep,
    }),
  });
};
export { getDBData, writeData };
