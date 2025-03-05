
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      const success = Math.random() > 0; // Randomly succeed or fail
      if (success) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
    }, 1000);
  });
  
  promise
    .then(function (result) {
      console.log(result); // Runs if the Promise is resolved
    })
    .catch(function (error) {
      console.error(error); // Runs if the Promise is rejected
    })
    .finally(function () {
      console.log("Operation completed (success or failure)."); // Always runs
    });