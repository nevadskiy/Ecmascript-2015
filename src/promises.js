/**
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
    // the same callback shits
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
*/


// PROMISES HERE
function applyForVisa(documents) {
    console.log('Process applying');

    let promise = new Promise(function(res, rej) {
        setTimeout(function() {
            Math.random() > .5 ? res(12) : rej('just denied');
        }, 2000);
    });

    return promise;
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Hotel is booked');
    return {book: 'mac'}
}

function buyTicket(book) {
    console.log('tickets is bought')
    console.log(book);
}

function getVisa(visa) {
    console.log(visa + ' is accepted');
    // need to return visa so next .then chain can use it in his body
    return visa;
}

applyForVisa({})
    // multiple then in success case
    .then(getVisa)
    // new promise was created here and returns automatically
    // we can use it and can not
    .then(bookHotel)
    // arg is that function above returns
    // to assign two or more args we should return new promise in function above
    // with method reject then accept two or more args OR with object Promise.resolve that
    // that instantly do resolve (also can instant reject)
    .then(buyTicket)
    // reject is called
    .catch(error => console.log(error));

// Promise can be in 3 statuses: pending, resolved, rejected