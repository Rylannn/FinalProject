// This is the default data to use if none is found in the browser's local storage
let defaultCats = [
    {
        name: "Alternative",
        todos: []
    },
    {
        name: "Blues",
        todos: []
    },
    {
        name: "Classical",
        todos: []
    },
    {
        name: "Country",
        todos: []
    },
    {
        name: "Club",
        todos: []
    },
    {
        name: "Dubstep",
        todos: []
    },
    {
        name: "EDM",
        todos: []
    },  
    {
        name: "Electronic",
        todos: []
    },
    {
        name: "Industrial",
        todos: []
    },  
    {
        name: "Techno",
        todos: []
    },
    {
        name: "Trance",
        todos: []
    },
    {
        name: "Trap",
        todos: []
    },
    {
        name: "Hardstyle",
        todos: []
    },
    {
        name: "Hip-Hop",
        todos: []
    },
    {
        name: "Holiday",
        todos: []
    },
    {
        name: "Industrial",
        todos: []
    },  
    {
        name: "Indie-Pop",
        todos: []
    },
    {
        name: "Jazz",
        todos: []
    },
    {
        name: "Lo-fi",
        todos: []
    },
    {
        name: "Vaporwave",
        todos: []
    },
]

// Set "cats" (short for "categories") to the data found in the browser's local storage.
// If none is found, use "defaultCats"
let cats = loadLocal(defaultCats)