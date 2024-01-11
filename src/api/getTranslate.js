const getTranslate = async (title) => {
  try {
    let response = await fetch(`http://3.39.62.158:8080/papago/translate`, {
      method: "POST",
      headers: {
        "X-ACCESS-TOKEN":
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYXRAbmF2ZXIuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcwNDkxMjM1MywiZXhwIjoxNzA0OTQ4MzUzfQ.t18T0b-BVDa372kHrGdRgT5WV_3DYist1CLzgqmPjltMn7PIoRSvuILjwkektEOfoAbiwTPdb6LrD7Z1Pt1ssQ",
      },
      body: JSON.stringify({
        prompt: { title },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.prompt; // Return the data instead of logging it
    } else {
      console.error(`Error: ${response.status} ${response.statusText}`);
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getTranslate };
