async function logJSONData() {
    console.log("Loading...");
    data = {};
    const response = await fetch("http://localhost:3000");
    const jsonData = await response.json();
    console.log(jsonData);
};

document.querySelector('.testButton').addEventListener('click', logJSONData)