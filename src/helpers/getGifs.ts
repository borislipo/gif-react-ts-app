export const getGifs = async (category: string) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=vLmHQ74RAohRF69eRSkiyhSIhW5Xgm54&q=${encodeURI(
    category
  )}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif: any) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });
  return gifs;
};
