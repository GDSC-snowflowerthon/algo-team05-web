const getUserInfo = async (cookie) => {
  try {
    let response = await fetch(`http://3.39.62.158:8080/setting`, {
      method: "GET",
      headers: {
        "X-ACCESS-TOKEN": cookie,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data; // Return the data instead of logging it
    } else {
      console.error(`Error: ${response.status} ${response.statusText}`);
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getUserInfo };
