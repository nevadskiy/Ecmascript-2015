// PROMISES SUMILATION
// Register function with callbacks
// then callback it
function applyForVisa(documents, resolve, reject) {
    console.log('Process applying');

    setTimeout(function() {
        let visa = 12;
        Math.random() > .5 ? resolve(12) : reject('just denied');
        // resolve(visa);
        // resolve(visa);
        // resolve(visa);
        // resolve(visa);
        // can be called a lot of times and 
        // can be outed of contol stack
        // to avoid this first right way is promise.then.catch
    }, 2000);
}


function bookHotel(visaId, resolve, reject) {
    
}

function buyTicket() {

}

//calling function with 2 callbacks anonymouses
applyForVisa({}, function(id) {
    console.info('Visa '+ id +' is received');

    //calling again 2 anonymouses callbacks
    bookHotel(id, function(reservation) {
        // resolving promise
        console.log(reservation);
        buyTicket(reservation, function() {
            //resolving
        }, function() {
            //rejecting

            // THATS REAL CALLBACK HELL
            // THATS REAL CALLBACK HELL
            // THATS REAL CALLBACK HELL
        })
    }, function(fail) {
        // rejecting promise
        console.error(fail);
    })

}, function(reason) {
    // rejecting first promise
    console.error(reason);
});