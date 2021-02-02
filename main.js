var gameData = {
  Money: 1,
  MoneyPerClick: 1,
  MoneyPerClickCost: 10
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
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Finding (Currently Level " + gameData.MoneyPerClick + ") Cost: " + gameData.MoneyPerClickCost + " Money";
  }
}

