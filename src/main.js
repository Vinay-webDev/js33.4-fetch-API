// fetch
// 2nd parameter which is usually or always I should say is object***
// "GET";
/*
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

getDadJoke();  */

// "POST"
/*
const jokeObject = {
    id: 'OfNRfaaUSf', 
    joke: 'When I left school, I passed every one of my exams… Greek Mythology. It always was my achilles elbow'
}
// this is going to a different test API "https:httpbin.org/post"
const postDadJoke = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    })
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

postDadJoke(jokeObject); */

// one more time for practice***
const jokeObject = {
    id: 'OfNRfaaUSf', 
    joke: 'When I left school, I passed every one of my exams… Greek Mythology. It always was my achilles elbow'
}
const postDadJoke = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jokeObj),
    })
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

postDadJoke(jokeObject);

// url














