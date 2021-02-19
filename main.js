var gameData = {
  Money: 0,
  MoneyPerClick: 1,
  MoneyPerClickCost: 10,
  MoneyPerAreaCost: 100,
};

function FindMoney() {
  gameData.Money += gameData.MoneyPerClick;
  document.getElementById("MoneyFound").innerHTML = gameData.Money + " Money Found";
}

function FindMoneyPerClick() {
  if (gameData.Money >= gameData.MoneyPerClickCost) {
    gameData.Money -= gameData.MoneyPerClickCost;
    gameData.MoneyPerClick += 1;
    gameData.MoneyPerClickCost *= 2;
    document.getElementById("MoneyFound").innerHTML = gameData.Money + " Money Found";
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Finding (Adds 1 Money Per Click) (Current MoneyPerClick: ) " + gameData.MoneyPerClick + ") Cost: " + gameData.MoneyPerClickCost + " Money";
  }
}
 function FindAreaPerClick () {
  if (gameData.Money >= gameData.MoneyPerAreaCost) {
    gameData.Money -= gameData.MoneyPerAreaCost;
    gameData.MoneyPerClick *= 2;
    gameData.MoneyPerAreaCost *= 3;
    document.getElementById("MoneyFound").innerHTML = gameData.Money + " Money Found";
    document.getElementById("perAreaUpgrade").innerHTML = "Upgrade Area Radius (Multiplies Money Per Click by 2) (Current MoneyPerClick: " + gameData.MoneyPerClick + ") Cost: " + gameData.MoneyPerAreaCost + " Money";
   }
}
