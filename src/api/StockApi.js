const basePath = "https://finnhub.io/api/v1";

//to get the search results
export const searchSymbol = async (query) => {
  const url = `${basePath}/search?q=${query}&token=cj9ochhr01qgvpdt4lhgcj9ochhr01qgvpdt4li0`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

//to get the details of the stock
export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=cj9ochhr01qgvpdt4lhgcj9ochhr01qgvpdt4li0`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=cj9ochhr01qgvpdt4lhgcj9ochhr01qgvpdt4li0`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=cj9ochhr01qgvpdt4lhgcj9ochhr01qgvpdt4li0`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
