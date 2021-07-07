import React from "react";

function Stock({stock, addStockToMyPortfolio, removeStockFromMyPortfolio, myPortfolio}) {
  const {id, name, price, ticker, type} = stock

  function handleClick() {

    const stockFound = myPortfolio.find((portfolioStock) => {
      //i find the certain portfolio id and return the object if it exists
      return portfolioStock.id === stock.id
    })
    
    //console.log(!!stockFound)
    !!stockFound ? removeStockFromMyPortfolio(stock) : addStockToMyPortfolio(stock)
    //i can use the !!to check if stockFound is a truthy or falsey value and then run the true or false ternary
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClick} id={id}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
