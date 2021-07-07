import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myPortfolio, removeStockFromMyPortfolio}) {

  const myPortfolioDisplay = myPortfolio.map((stock) => {

    return <Stock key={stock.name}  stock={stock} removeStockFromMyPortfolio={removeStockFromMyPortfolio} myPortfolio={myPortfolio} />
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {myPortfolioDisplay}
    </div>
  );
}

export default PortfolioContainer;
