// var salesTaxRates = {
//   AB: 0.05,
//   BC: 0.12,
//   SK: 0.10
// };

// var taxRateAB = salesTaxRates['AB'];
// var taxRateBC = salesTaxRates['BC'];
// var taxRateSK = salesTaxRates['SK'];


// var companySalesData = [
//   {
//     name: "Telus",
//     province: "BC",
//     sales: [ 100, 200, 400 ]
//   },
//   {
//     name: "Bombardier",
//     province: "AB",
//     sales: [ 80, 20, 10, 100, 90, 500 ]
//   },
//   {
//     name: "Telus",
//     province: "SK",
//     sales: [ 500, 100 ]
//   }
// ];

// var ABSales = companySalesData[1]['sales'];
// var BCSales = companySalesData[0]['sales'];
// var SKSales = companySalesData[2]['sales'];

// var totalABSales = 0;
// for (var i = 0; i < ABSales.length; i++){
//   totalABSales += ABSales[i];
// }

// var totalBCSales = 0;
// for (var i = 0; i < BCSales.length; i++){
//   totalBCSales += BCSales[i];
// }

// var totalSKSales = 0;
// for (var i = 0; i < SKSales.length; i++){
//   totalSKSales += SKSales[i];
// }

// var totalTaxInBC = totalBCSales * taxRateBC;
// console.log(totalTaxInBC);

// var totalTaxInAB = totalABSales * taxRateAB;
// console.log(totalTaxInAB);

// var totalTaxInSK = totalSKSales * taxRateSK;
// console.log(totalTaxInSK);


// function calculateSalesTax(salesData, taxRates) {

//   // Implement your code here
// }

// var results = calculateSalesTax(companySalesData, salesTaxRates);

// /* Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }
// */




var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var newObj = {};

  for(var i = 0; i < salesData.length; i++){
    salesData[i].taxes = []
    var taxPercent = taxRates[salesData[i].province]

    for(var j = 0; j < salesData[i].sales.length; j++) {
      var salesItem = salesData[i].sales[j];
      salesData[i].taxes.push(salesItem * taxPercent)
    }

    var totalMonies = 0;
    for(var k in salesData[i].sales) {
      totalMonies += salesData[i].sales[k]
    }

    var totalTax = 0
    for(var l in salesData[i].taxes) {
      totalTax += salesData[i].taxes[l]
    }

    if(!newObj[salesData[i].name]) {
      newObj[salesData[i].name] = {
        totalSales: totalMonies,
        totalTaxes: totalTax
      }
    } else {
      newObj[salesData[i].name].totalSales += totalMonies;
      newObj[salesData[i].name].totalTaxes += totalTax;
    }

  }

  return newObj

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results)
