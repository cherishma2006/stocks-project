export const getStockData =
async (symbol) => {

  const prices = {

    AAPL: 2101,

    TSLA: 3452,

    NVDA: 8903,

    META: 5204,

    AMZN: 1855,

    MSFT: 4606,

    GOOG: 1767,

  };

  return {

    "05. price":

    prices[symbol] || 100,

  };

};