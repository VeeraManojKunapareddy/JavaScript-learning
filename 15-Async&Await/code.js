// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

// Async function to use await
async function getData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();
        console.log(data);
        console.log("hello")
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the async function
getData();