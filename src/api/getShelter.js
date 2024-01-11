const getShelter = async (region) => {
  try {
    let response = await fetch(
      `http://3.39.62.158:8080/shelter/search/${region}`,
      {
        method: "POST",
        headers: {
          "X-ACCESS-TOKEN":
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYXRAbmF2ZXIuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcwNDkxMjM1MywiZXhwIjoxNzA0OTQ4MzUzfQ.t18T0b-BVDa372kHrGdRgT5WV_3DYist1CLzgqmPjltMn7PIoRSvuILjwkektEOfoAbiwTPdb6LrD7Z1Pt1ssQ",
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
