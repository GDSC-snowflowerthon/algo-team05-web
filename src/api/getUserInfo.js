const getUserInfo = async () => {
  try {
    let response = await fetch(`http://3.39.62.158:8080/setting`, {
      method: "GET",
      headers: {
        "X-ACCESS-TOKEN":
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTEiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzA0OTg3OTEzLCJleHAiOjE3MDUwMjM5MTN9.DX4IKjjfexrbwroszGojFVie_H9m-FSVtPZljk6ccQE7LHySlWCpVPUpS3ZaA2Cm9DsxpfHUtgDAEm0zQMuf5w",
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
