
function getPreviousMoney() {
    const balance = document.getElementById('balance');
    const previousBalanceText = balance.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
}
function btnFunction(btnName) {
    const fieldMoney = document.getElementById(btnName);
    const currentMoneyText = fieldMoney.value;
    const currentMoney = parseFloat(currentMoneyText);
    fieldMoney.value = "";
    return currentMoney;
}
function textFunction(textName, currentMoney) {
    const addMoney = document.getElementById(textName);
    const previousMoneyText = addMoney.innerText;

    const previousMoney = parseFloat(previousMoneyText);

    const totalMoney = previousMoney + currentMoney;
    addMoney.innerText = totalMoney;
}
function updateBlance(currentMoney, addvalue) {
    const balance = document.getElementById('balance');
    const previousBalance = getPreviousMoney();
    if (addvalue == true) {
        const totalBalance = previousBalance + currentMoney;
        balance.innerText = totalBalance;
    }
    else {
        const totalBalance = previousBalance - currentMoney;
        balance.innerText = totalBalance;
    }
}
document.getElementById('dipositBtn').addEventListener('click', function () {

    const currentMoney = btnFunction('diposit');
    if (currentMoney > 0) {
        updateBlance(currentMoney, addvalue = true)
        textFunction('addDiposit', currentMoney);
    }

});
document.getElementById('withdrawBtn').addEventListener('click', function () {

    const currentMoney = btnFunction('withdraw');
    const previousBalance = getPreviousMoney();
    if (currentMoney > 0 && currentMoney < previousBalance) {
        textFunction('addWithdraw', currentMoney);
        updateBlance(currentMoney, addvalue = false)
    }

});




