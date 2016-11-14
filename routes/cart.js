var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var packSize = [1, 3, 5, 7];
//  TODO: Add all products to a DB

var espressoPods = [
    {
        sku: "EP003",
        nice_name: "Vanilla Espresso Pods",
        product_type: "ESPRESSO_POD",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "EP005",
        nice_name: "Vanilla Espresso Pods",
        product_type: "ESPRESSO_POD",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "EP007",
        nice_name: "Vanilla Espresso Pods",
        product_type: "ESPRESSO_POD",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "EP013",
        nice_name: "Caramel Espresso Pods",
        product_type: "ESPRESSO_POD",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "EP015",
        nice_name: "Caramel Espresso Pods",
        product_type: "ESPRESSO_POD",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "EP017",
        nice_name: "Caramel Espresso Pods",
        product_type: "ESPRESSO_POD",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
        pack_size: packSize,
        model: null
    }
];

var smallPods = [
    {
        sku: "CP001",
        nice_name: "Vanilla Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP003",
        nice_name: "Vanilla Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP011",
        nice_name: "Caramel Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP013",
        nice_name: "Caramel Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP021",
        nice_name: "Pumpkin Spice Latte Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_PSL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP023",
        nice_name: "Pumpkin Spice Latte Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_PSL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP031",
        nice_name: "Mocha Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP033",
        nice_name: "Mocha Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP041",
        nice_name: "Hazelnut Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP043",
        nice_name: "Hazelnut Flavored Coffee Pods",
        product_type: "COFFEE_POD_SMALL",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
        pack_size: packSize,
        model: null
    }
];
var largePods = [
    {
        sku: "CP101",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP103",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP111",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP113",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP121",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_PSL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP123",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_PSL',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP131",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP133",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP141",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
        pack_size: packSize,
        model: null
    },
    {
        sku: "CP143",
        nice_name: "",
        product_type: "COFFEE_POD_LARGE",
        water_line_compatible: null,
        coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
        pack_size: packSize,
        model: null
    }
];
var machines = [
    {
        sku: "CM001",
        nice_name: "Small Coffee Machine",
        product_type: "COFFEE_MACHINE_SMALL",
        water_line_compatible: false,
        coffee_flavor: null,
        pack_size: null,
        model: 'base model',
        related_products: smallPods
    },
    {
        sku: "CM002",
        nice_name: "Small Coffee Machine",
        product_type: "COFFEE_MACHINE_SMALL",
        water_line_compatible: false,
        coffee_flavor: null,
        pack_size: null,
        model: 'premium model',
        related_products: smallPods
    },
    {
        sku: "CM003",
        nice_name: "Small Coffee Machine",
        product_type: "COFFEE_MACHINE_SMALL",
        water_line_compatible: true,
        coffee_flavor: null,
        pack_size: null,
        model: 'delux model',
        related_products: smallPods
    },
    {
        sku: "CM101",
        nice_name: "Large Coffee Machine",
        product_type: "COFFEE_MACHINE_LARGE",
        water_line_compatible: false,
        coffee_flavor: null,
        pack_size: null,
        model: 'base model',
        related_products: largePods
    },
    {
        sku: "CM102",
        nice_name: "Large Coffee Machine",
        product_type: "COFFEE_MACHINE_LARGE",
        water_line_compatible: true,
        coffee_flavor: null,
        pack_size: null,
        model: 'premium model',
        related_products: largePods
    },
    {
        sku: "CM103",
        nice_name: "Large Coffee Machine",
        product_type: "COFFEE_MACHINE_LARGE",
        water_line_compatible: true,
        coffee_flavor: null,
        pack_size: null,
        model: 'deluxe model',
        related_products: largePods
    },
    {
        sku: "EM001",
        nice_name: "Espresso Machine",
        product_type: "ESPRESSO_MACHINE",
        water_line_compatible: false,
        coffee_flavor: null,
        pack_size: null,
        model: 'base model',
        related_products: espressoPods
    },
    {
        sku: "EM002",
        nice_name: "Espresso Machine",
        product_type: "ESPRESSO_MACHINE",
        water_line_compatible: false,
        coffee_flavor: null,
        pack_size: null,
        model: 'premium model',
        related_products: espressoPods
    },
    {
        sku: "EM003",
        nice_name: "Espresso Machine",
        product_type: "ESPRESSO_MACHINE",
        water_line_compatible: false,
        coffee_flavor: null,
        pack_size: null,
        model: 'delux model',
        related_products: espressoPods
    }
];


function getMachine(sku) {
    var theItems = machines;
    for (var i = 0; i < theItems.length; i++) {
        if (theItems[i].sku === sku) {
            return theItems[i];
        }
    }
    return '';
}
router.get('/', function (req, res, next) {
    Cart.find()
        .exec(function (err, carts) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                cart: 'Success',
                obj: machines[0]
            });
        });
});
router.get('/:sku', function (req, res, next) {
    var sku = req.params.sku;
    Cart.find()
        .exec(function (err, carts) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                cart: 'Success',
                obj: getMachine(sku)
            });
        });
});

router.get('/related/:sku', function (req, res, next) {
    var sku = req.params.sku;

    function getShoppingCart(sku) {
        for(var i = 0; i < machines.length; i++) {
            if(machines[i].sku === sku) {
                return machines[i];
            }
        }
        return false;
    }

    function shuffle(array) {
        var counter = array.length;
        while (counter > 0) {
            var index = Math.floor(Math.random() * counter);

            counter--;

            var temp = array[counter];

            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    function getRelatedProducts() {
        var shoppingCart = getShoppingCart(sku);
        var mach = machines;

        if (shoppingCart) {
            for (var i = 0; i < mach.length; i++) {
                if (shoppingCart.sku === mach[i].sku) {
                    return shuffle(shoppingCart.related_products.slice(0,4));
                }
            }
        }
        return false;
    }

    Cart.find()
        .exec(function (err, carts) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                cart: 'Success',
                obj: getRelatedProducts(sku)
            });
        });
});

router.post('/', function (req, res, next) {
    var cart = new Cart({
        content: req.body.content,
        name: req.body.name,
        sku: req.body.sku
    });
    cart.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            cart: 'Saved cart',
            obj: result
        });
    });
});

router.patch('/:id', function (req, res, next) {
    Cart.findById(req.params.id, function (err, cart) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!cart) {
            return res.status(500).json({
                title: 'No Cart Found!',
                error: {cart: 'Cart not found'}
            });
        }
        cart.content = req.body.content;
        cart.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                cart: 'Updated cart',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    Cart.findById(req.params.id, function (err, cart) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!cart) {
            return res.status(500).json({
                title: 'No Cart Found!',
                error: {cart: 'Cart not found'}
            });
        }
        cart.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                cart: 'Deleted cart',
                obj: result
            });
        });
    });
});

module.exports = router;