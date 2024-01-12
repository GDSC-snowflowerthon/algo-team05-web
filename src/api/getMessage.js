export const getMessageData = async (cookie) => {
  try {
    let response = await fetch(
      `https://api.alertglobal.store/disaster/message`,
      {
        headers: {
          "X-ACCESS-TOKEN": cookie,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log(response);
      const data = await response.json();
      console.log(data);
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
