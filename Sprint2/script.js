document.getElementById("loadData").addEventListener("click", async () => {
    const output = document.getElementById("output");
    output.textContent = "Loading...";

    try {
        // Example public API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        // Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
});