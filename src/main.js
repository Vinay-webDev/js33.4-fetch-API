// fetch
// 2nd parameter which is usually or always I should say is object***
// "GET";

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}

getDadJoke();






















