
// Products
var packSize = [1, 3, 5, 7];
var espressoPods = [
    {sku: "EP003", nice_name: "Vanilla Espresso Pods", product_type: "ESPRESSO_POD", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: packSize, model: null},
    {sku: "EP005", nice_name: "Vanilla Espresso Pods", product_type: "ESPRESSO_POD", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: packSize, model: null},
    {sku: "EP007", nice_name: "Vanilla Espresso Pods", product_type: "ESPRESSO_POD", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: packSize, model: null},
    {sku: "EP013", nice_name: "Caramel Espresso Pods", product_type: "ESPRESSO_POD", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: packSize, model: null},
    {sku: "EP015", nice_name: "Caramel Espresso Pods", product_type: "ESPRESSO_POD", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: packSize, model: null},
    {sku: "EP017", nice_name: "Caramel Espresso Pods", product_type: "ESPRESSO_POD", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: packSize, model: null}
];

var smallPods = [
    {sku: "CP001", nice_name: "Vanilla Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: packSize, model: null},
    {sku: "CP003", nice_name: "Vanilla Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: packSize, model: null},
    {sku: "CP011", nice_name: "Caramel Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: packSize, model: null},
    {sku: "CP013", nice_name: "Caramel Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: packSize, model: null},
    {sku: "CP021", nice_name: "Pumpkin Spice Latte Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_PSL', pack_size: packSize, model: null},
    {sku: "CP023", nice_name: "Pumpkin Spice Latte Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_PSL', pack_size: packSize, model: null},
    {sku: "CP031", nice_name: "Mocha Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_MOCHA', pack_size: packSize, model: null},
    {sku: "CP033", nice_name: "Mocha Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_MOCHA', pack_size: packSize, model: null},
    {sku: "CP041", nice_name: "Hazelnut Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT', pack_size: packSize, model: null},
    {sku: "CP043", nice_name: "Hazelnut Flavored Coffee Pods", product_type: "COFFEE_POD_SMALL", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT', pack_size: packSize, model: null}
];
var largePods = [
    {sku: "CP101", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: packSize, model: null},
    {sku: "CP103", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: packSize, model: null},
    {sku: "CP111", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: packSize, model: null},
    {sku: "CP113", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: packSize, model: null},
    {sku: "CP121", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_PSL', pack_size: packSize, model: null},
    {sku: "CP123", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_PSL', pack_size: packSize, model: null},
    {sku: "CP131", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_MOCHA', pack_size: packSize, model: null},
    {sku: "CP133", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_MOCHA', pack_size: packSize, model: null},
    {sku: "CP141", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT', pack_size: packSize, model: null},
    {sku: "CP143", nice_name: "", product_type: "COFFEE_POD_LARGE", water_line_compatible: null, coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT', pack_size: packSize, model: null}
];


var machines = [
    {sku: "CM001", nice_name: "", product_type: "COFFEE_MACHINE_SMALL", water_line_compatible: false, coffee_flavor: null, pack_size: null, model: 'base model', related_products: smallPods},
    {sku: "CM002", nice_name: "", product_type: "COFFEE_MACHINE_SMALL", water_line_compatible: false, coffee_flavor: null, pack_size: null, model: 'premium model', related_products: smallPods},
    {sku: "CM003", nice_name: "", product_type: "COFFEE_MACHINE_SMALL", water_line_compatible: true, coffee_flavor: null, pack_size: null, model: 'delux model', related_products: smallPods},
    {sku: "CM101", nice_name: "", product_type: "COFFEE_MACHINE_LARGE", water_line_compatible: false, coffee_flavor: null, pack_size: null, model: 'base model', related_products: largePods},
    {sku: "CM102", nice_name: "", product_type: "COFFEE_MACHINE_LARGE", water_line_compatible: true, coffee_flavor: null, pack_size: null, model: 'premium model', related_products: largePods},
    {sku: "CM103", nice_name: "", product_type: "COFFEE_MACHINE_LARGE", water_line_compatible: true, coffee_flavor: null, pack_size: null, model: 'deluxe model', related_products: largePods},
    {sku: "EM001", nice_name: "", product_type: "ESPRESSO_MACHINE", water_line_compatible: false, coffee_flavor: null, pack_size: null, model: 'base model', related_products: espressoPods},
    {sku: "EM002", nice_name: "", product_type: "ESPRESSO_MACHINE", water_line_compatible: false, coffee_flavor: null, pack_size: null, model: 'premium model', related_products: espressoPods},
    {sku: "EM003", nice_name: "", product_type: "ESPRESSO_MACHINE", water_line_compatible: false, coffee_flavor: null, pack_size: null, model: 'delux model', related_products: espressoPods}
];

var products = [machines, largePods, smallPods, espressoPods];

// Faux Shopping Cart
function getShoppingCart() {
    return [ machines[0] ];
}

function shuffle(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function getRelatedProducts() {
    var shoppingCart = getShoppingCart();

    if(shoppingCart) {
        return shuffle(shoppingCart[0].related_products).slice(0, 3);
    }
    return false;
}

getRelatedProducts();

//router.get('/api/related', function(req, res, next){
//    res.json(getRelatedProducts());
//});
//router.get('/api/cart', function(req, res, next){
//    res.json(getShoppingCart());
//});
