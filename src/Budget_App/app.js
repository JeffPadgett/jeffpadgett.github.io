


var budgetController = (function () {

    var x = 23;

    var add = function(a){
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();




var UIController = (function() {
    
    //Some code

})();


// Global App Controller
var controller = (function (budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {

        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    });

    document.addEventListener('keypress', function(event) {
        
        if (event.KeyCode === 13 || event.which === 13) {
            console.log('ENTER was pressed.');
        }

    })


})(budgetController, UIController);