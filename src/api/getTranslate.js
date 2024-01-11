const getTranslate = async (title, cookie) => {
  try {
    let response = await fetch(`http://3.39.62.158:8080/papago/translate`, {
      method: "POST",
      headers: {
        "X-ACCESS-TOKEN": cookie,
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
