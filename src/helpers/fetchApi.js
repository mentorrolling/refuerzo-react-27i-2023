const url =
  "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=452d00247570407f893864ae69119af9";

export const getNews = async (page) => {
  try {
    const resp = await fetch(url + "&page=" + page);
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
