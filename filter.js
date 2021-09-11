const products = [
    {name:'sumsung-g4', ram:'4GB', price: 5000, color:'black'},
    {name:'moto-G9-play', ram:'4GB', price: 17000, color:"Blue"},
    {name:'Huawei-p6', ram: '2GB', price: 12000, color:'white'}
]

const highPrices = products.filter(product => product.price > 12000);
console.log(highPrices);

const blackColoredPhone = products.filter(product => product.color == 'black');
console.log(blackColoredPhone);