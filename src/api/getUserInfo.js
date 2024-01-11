const getUserInfo = async () => {
  try {
    let response = await fetch(`http://3.39.62.158:8080/setting`, {
      method: "GET",
      headers: {
        "X-ACCESS-TOKEN":
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmMiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzA0OTc5ODk4LCJleHAiOjE3MDUwMTU4OTh9.dByX3uUGtC0edThAiagjl5TFqagXK-d03yTGvHcYPMEmPG_c6l1dJmqyur2Bgg67iEc63chofx0otVguqHt4gg",
      },
    });

    if (response.ok) {
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

export { getUserInfo };
