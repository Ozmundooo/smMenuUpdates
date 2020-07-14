var sharables = [
    { name: 'PRETZEL BITES', desc: 'garlic butter, sea salt w/ bacon beer cheese dip.', price: 13},
    { name: 'BANG BANG SHRIMP', desc: 'tempura battered, sriracha aioli & unagi sauce.', price: 17.5},
    { name: 'SPINACH & ARTICHOKE DIP', desc: 'warm tortilla chips, salsa & sour cream on the side.', price: 13.25},
    { name: 'CHICKEN WINGS', desc: 'buffalo, hot, salt & pepper, or teriyaki. ranch or bleu cheese on the side.', price: 13.50},
    { name: 'DRAGON BOAT LETTUCE WRAPS', desc: 'chicken, veggies, crunchy noodles, hoisin peanut sauce & cashews', price: 15},
    { name: 'BAJA BRUSSELS SPROUTS', desc: 'red pepper, bacon, parmesan, chilis w/ lime crema & cilantro.', price: 12},
    { name: 'JALAPENO MAC & CHEESE', desc: 'creamy cheese sauce, toasted parmesan panko w/ garlic bread.', price: 11.75},
    { name: 'MARGHERITA FLATBREAD', desc: 'tomato, mozza, cream cheese & fresh basil', price: 13.50},
    { name: 'SPANAKO FLATBREAD', desc: 'tomato, roasted red pepper, spinach, red onion, goat cheese, oregano, balsamic glaze.', price: 14}
];

var steaksandmains = [
    {name:'THE SIRLOIN', desc:'6oz sirloin, lightly seasoned & cooked to your preference. served w/ mashed potatoes & seasonal veg.', price: 24 },
    {name:'THE EMPIRE STATE', desc:'10oz new york strip, perfectly marbled & seared for maximum flavour. w/ sauteed garlic mushrooms, mashed potatoes & seasonal veg.', price:33 },
    {name:'PISTACHIO CRUSTED SALMON', desc:'mashed potato, seasonal veg & drizzled maple butter', price: 28.50},
    {name:'SHRIMP & TRUFFLE RIGATONI', desc:'crispy prosciutto, mushrooms, peas, parmesan w/ black truffle cream sauce.', price: 24.50 },
    {name:'LONG BEACH FISH TACOS', desc:'chili & lime spiced mahi mahi, avocado, crisp slaw, pico de gallo, garlic aioli. w/ fries & gravy.', price:15.50 },
    {name:'CHICKEN ENCHILADAS', desc:'chicken, black beans, corn, red onions, house enchilada sauce, cheeses, w/ lettuce, jalapenos, cilantro, lime crema, pico de gallo.', price: 17.50 },
    {name:'FRIED CHICKEN TENDERS', desc:'buttermilk marinated, hand breaded, fries & plum sauce.', price: 16},
    {name:'FISH & CHIPS', desc:'beer battered haddock, tartar sauce, fries.', price: 17 }
];

var soupsandsalads = [
    {name:'PACIFIC RIM NOODLE BOWL',desc:'chicken, shrimp, rice noodles, veg, spiced broth, chili garlic oil.',price:17.75 },
    {name:'WEST COAST CHOP SALAD',desc:'cranberries, cucumber, almonds, avocado, baked chickpeas, goat cheese, honey-dijon vinaigrette.',price: 14.75},
    {name:'GRILLED CHICKEN CAESAR',desc:'house made croutons, chopped bacon, shaved parmesan & a fresh lemon wedge.',price: 16.25},
    {name:'THE COBB SALAD',desc:'chicken, bacon, shredded cheddar, egg, cucumber, tomato, avocado, balsamic bleu cheese vinaigrette.',price: 17.25},
    {name:'GRILLED STEAK SALAD',desc:'grilled sirloin, romaine, tomato, bleu cheese, grilled mushrooms, red onion, buttermilk bleu cheese dressing.',price: 22.25 }
];

var bowls = [
    {name:'THE BURRITO', desc:'chicken, black beans, corn, onion, cheese, lettuce, rice, cilantro, pico de gallo, lime, chipotle sauce & guacamole.', price: 17},
    {name:'TERIYAKI RICE BOWL', desc:'chicken, veggies, cashews, sesame brown rice & teriyaki sauce.', price: 16.75},
    {name:'BUTTER CHICKEN', desc:'curried tomato cream sauce, cashew butter, spiced yogurt, cilantro & naan, over basmati rice.', price: 16.50}
];

var burgers = [
    {name:'THE MAIN', desc:'two patties, american cheese, lettuce, tomato, onion, pickle, burger sauce.', price: 16.75},
    {name:'THE GRILLED CHEESE BURGER', desc:'american, swiss & provolone, bacon, lettuce, tomato, onion, butter grilled french bread.', price: 18.75},
    {name:'GRILLED CHICKEN CLUB', desc:'lettuce, tomato, mayo, avocado, peppered bacon, cheddar.', price: 17},
    {name:'THE VEGGIE', desc:'two black bean patties, american cheese, lettuce, tomato, onion, pickle, burger sauce.', price: 16},
    {name:'FRENCH DIP', desc:'shaved roast beef, mushrooms, onions, horseradish mayo & melted swiss. served w/ au jus.', price: 18},
    {name:'OPEN-FACED STEAK SANDWICH', desc:'6oz top sirloin, garlic bread.', price: 22},
    {name:'CALIFORNIA CHICKEN WRAP', desc:'chicken, peppered bacon, aged cheddar, avocado, tomato, shredded lettuce, mayo, red wine vinaigrette.', price: 17.25}
];

var sides = [
    {name:'MIXED GREEN SALAD', price: 0},
    {name:'CAESER SALAD', price: 0},
    {name:'FRIES W/ DILL DIP', price:0},
    {name:'SESAME BROWN RICE', price:0},
    {name:'MASHED POTATOES', price:0},
    {name:'SEASONAL VEG', price: 2.25},
    {name:'SWEET POTATO FRIES', price: 2.75},
    {name:'POUTINE', price:2.75}
];

var kids = [
    {name:'CHICKEN FINGERS', desc:'with fries', price: 7.75},
    {name:'MAC & CHEESE', desc:'', price: 7},
    {name:'GRILLED CHEESE SANDWICH', desc:'with fries', price: 7},
    {name:'CHEESEBURGER', desc:'with fries', price: 7},
    {name:'CHEESE PIZZA', desc:'', price: 7.75},
    {name:'CHICKEN & BROCCOLI', desc:'in plum sauce, over brown rice', price: 7.75}
];

var happyendings = [
    {name:'STRAWBERRY CHAMPAGNE CHEESECAKE', desc:'gluten free w/ strawberry coulis & chocolate sauce.',price: 7},
    {name:'CHOCOLATE BROWNIE', desc:'drizzled w/ caramel & chocolate sauce.',price: 6.25}
];

var craftanddraught = [
    {name:'BLONDE LAGER', desc:'light bodied, golden crisp lager', price16: 6.75, price21: 8.75},
    {name:'RED ALE', desc:'medium/full bodied with a malty flavour, mild bitterness', price16: 6.75, price21:8.75},
    {name:'INDIA SESSION ALE', desc:'IBU 25, medium bodied with citrus and caramel notes, mild hoppiness', price16: 6.75, price21: 8.75},
    {name:'BUD LIGHT', desc:'clean, crisp, refreshing', price16: 7, price21: 9},
    {name:'SAPPORO', desc:'golden lager, crisp clean finish', price16: 7.50, price21: 9.50}
];

var extrasCandD = [
    {name:'', desc:'', price:''},
    {name:'', desc:'', price:''}
];

var app = angular.module("app", []);
        app.controller("FoodController", ["$scope", function ($scope) {
            $scope.Sharables = sharables;
            $scope.Steaksandmains = steaksandmains;
            $scope.Soupsandsalads = soupsandsalads;
            $scope.Bowls = bowls;
            $scope.Burgers = burgers;
            $scope.Kids = kids;
            $scope.Sides = sides;
            $scope.Happyendings = happyendings;
            
        }]);