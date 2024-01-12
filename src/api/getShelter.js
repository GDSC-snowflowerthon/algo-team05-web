const getShelter = async (region, cookie) => {
  try {
    let response = await fetch(
      `https://api.alertglobal.store/shelter/search/${region}`,
      {
        method: "POST",
        headers: {
          "X-ACCESS-TOKEN": { cookie },
        },
        body: JSON.stringify({
          region,
        }),
      }
    );

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

export { getShelter };
