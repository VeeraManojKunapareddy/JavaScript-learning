fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(function (data) {
    console.log("Fetched data:", data);
  })
  .catch(function (error) {
    console.error("Error fetching data:", error);
  })
  .finally(function () {
    console.log("Fetch operation completed.");
  });