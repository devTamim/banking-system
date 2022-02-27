document.getElementById('dipositBtn').addEventListener('click', function () {
    const fieldMoney = document.getElementById('diposit');
    const currentMoneyText = fieldMoney.value;
    const currentMoney = parseFloat(currentMoneyText);

    const addMoney = document.getElementById('addDiposit');
    const previousMoneyText = addMoney.innerText;

    const previousMoney = parseFloat(previousMoneyText);

    const totalMoney = previousMoney + currentMoney;
    addMoney.innerText = totalMoney;
    fieldMoney.value = "";
    // console.log(totalMoney);

    const balance = document.getElementById('balance');
    const previousBalanceText = balance.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const totalBalance = previousBalance + currentMoney;
    balance.innerText = totalBalance;


});
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withrawfieldMoney = document.getElementById('withdraw');
    const currentWithdrawMoneyText = withrawfieldMoney.value;
    const currentWithdrawMoney = parseFloat(currentWithdrawMoneyText);

    const addWithdrawMoney = document.getElementById('addWithdraw');
    const previousWithdrawMoneyText = addWithdrawMoney.innerText;

    const previousWithdrawMoney = parseFloat(previousWithdrawMoneyText);

    const totalWithdrawMoney = previousWithdrawMoney + currentWithdrawMoney;
    addWithdrawMoney.innerText = totalWithdrawMoney;
    withrawfieldMoney.value = "";
    // console.log(totalMoney);

    const withdrawBalance = document.getElementById('balance');
    const previousWithdrawBalanceText = withdrawBalance.innerText;
    const previousBalance = parseFloat(previousWithdrawBalanceText);
    const totalBalanceBalance = previousBalance - currentWithdrawMoney;
    balance.innerText = totalBalanceBalance;


});




