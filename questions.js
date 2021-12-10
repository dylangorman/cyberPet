export let initQuestions = [
    {
        type:"list",
        name: "type",
        message:"Which CyberPet would you like to lool after?",
        choices: ["Siberian Tiger", "African Elephant", "Whale Shark"]
    },

    {
        type: "input",
        name: "name",
        message: "Pick a Name for your CyberPet!"
    },
]

export let tigerQuestions = [
    {
        type: "list",
        name: "action",
        message: "Choose an action",
        choices: ["drink", "feed", "sleep", "clean", "relieve", "hunt", "play", "groom"]
    }
]
export let elephantQuestions = [
    {
        type: "list",
        name: "action",
        message: "Choose an action",
        choices: ["drink", "feed", "sleep", "clean", "relieve", "socialise", "play", "chill"]
    }
]
export let sharkQuestions = [
    {
        type: "list",
        name: "action",
        message: "Choose an action",
        choices: ["drink", "feed", "sleep", "clean", "relieve", "swim", "hunt", "trance"]
    }
]
