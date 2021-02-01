var gameData = {
  Money: 0,
  MoneyPerClick: 0.1
};

function BegForMoney() {
  gameData.Money += gameData.MoneyPerClick;
}
document.getElementById("Money begged").innerHTML = gameData.money + " Money begged";
