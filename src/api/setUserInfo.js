const setUserInfo = async (city, gu, language, cookie) => {
  console.log("city:", city);
  console.log("gu", gu);
  console.log("language", language);
  try {
    let response = await fetch(`http://3.39.62.158:8080/setting/change`, {
      method: "PUT",
      headers: {
        "X-ACCESS-TOKEN": cookie,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: city,
        gu: gu,
        language: language,
      }),
    });

    if (response.ok) {
      console.log(response);
      return response; // Return the data instead of logging it
    } else {
      console.error(`Error: ${response.status} ${response.statusText}`);
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { setUserInfo };
