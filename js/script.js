
var calc = function() {
  var bill = Number(document.getElementById('amount').value);
  var split = Number(document.getElementById('NumPeople').value);
  var percentage = Number(document.getElementById('percentage').value);
  var tip = bill*(percentage/100);
  var totalBill = tip+bill;
  var splitPerPerson = totalBill/split;
  document.getElementById('tip').innerHTML = '$' + Number(tip).toFixed(2);
  document.getElementById('total').innerHTML = '$' + Number(totalBill).toFixed(2);
  document.getElementById('splitbill').innerHTML = '$' + Number(splitPerPerson).toFixed(2);
}
