// Example for Promise.all
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log('Promise.all results:', results);
    })
    .catch((error) => {
        console.error('Promise.all error:', error);
    });

    //output=>Promise.all results: [ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]

// Example for Promise.allSettled
const promise4 = new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), 1000));
const promise5 = new Promise((_, reject) => setTimeout(() => reject('Promise 5 rejected'), 2000));
const promise6 = new Promise((resolve) => setTimeout(() => resolve('Promise 6 resolved'), 3000));

Promise.allSettled([promise4, promise5, promise6])
    .then((results) => {
        console.log('Promise.allSettled results:', results);
    });

    //output=>Promise.allSettled results: [
    //     { status: 'fulfilled', value: 'Promise 4 resolved' },
    //     { status: 'rejected', reason: 'Promise 5 rejected' },
    //     { status: 'fulfilled', value: 'Promise 6 resolved' }
    //   ]

// Example for Promise.race
const promise7 = new Promise((resolve) => setTimeout(() => resolve('Promise 7 resolved'), 1000));
const promise8 = new Promise((resolve) => setTimeout(() => resolve('Promise 8 resolved'), 2000));
const promise9 = new Promise((resolve) => setTimeout(() => resolve('Promise 9 resolved'), 3000));

Promise.race([promise7, promise8, promise9])
    .then((result) => {
        console.log('Promise.race result:', result);
    })
    .catch((error) => {
        console.error('Promise.race error:', error);
    });

    //output
    //Promise.race result: Promise 7 resolved

// Example for Promise.any
const promise10 = new Promise((_,reject) => setTimeout(() => reject('Promise 10 rejected'), 1000));
const promise11 = new Promise((resolve) => setTimeout(() => resolve('Promise 11 resolved'), 2000));
const promise12 = new Promise((resolve) => setTimeout(() => resolve('Promise 12 resolved'), 3000));

Promise.any([promise10, promise11, promise12])
    .then((result) => {
        console.log('Promise.any result:', result);
    })
    .catch((error) => {
        console.error('Promise.any error:', error);
    });

    //output=>Promise.any result: Promise 11 resolved