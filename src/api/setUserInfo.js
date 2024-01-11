const setUserInfo = async ({ city, gu, language }) => {
  try {
    let response = await fetch(`http://3.39.62.158:8080/setting/change`, {
      method: "PUT",
      headers: {
        "X-ACCESS-TOKEN":
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmMiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzA0OTc5ODk4LCJleHAiOjE3MDUwMTU4OTh9.dByX3uUGtC0edThAiagjl5TFqagXK-d03yTGvHcYPMEmPG_c6l1dJmqyur2Bgg67iEc63chofx0otVguqHt4gg",
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
