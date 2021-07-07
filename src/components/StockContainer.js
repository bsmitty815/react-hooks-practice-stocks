import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStockToMyPortfolio, myPortfolio}) {

  const displayStocks = stocks.map((stock) => {
    return <Stock key={stock.id} addStockToMyPortfolio={addStockToMyPortfolio} myPortfolio={myPortfolio} stock={stock} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      
         {displayStocks}
 
    </div>
  );
}

export default StockContainer;
