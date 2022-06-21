
// Check that the category index in the URL is valid
function getCatIndex() {

    // Copy the value of the URL parameter "catIndex" into the variable "result"
    let result = urlParams.catIndex

    // Make sure we have been given a valid category index
    if (result == null || isNaN(result) || result < 0 || result > cats.length-1) {
        document.write("Invalid category index")
        return -1 // Return -1 to indicate an error
    }

    // All is good if we made it here. Return the result.
    return result
}

// Populates the <h3> tag with id="heading" and the rest of the table
function outputHTML() {

    // Update the heading with the name of the category
    setHTML("heading", `Genre: ${cats[catIndex].name}`)

    // Append data to the table
    let todos = cats[catIndex].todos // gives us easier access to the todo list for this category
    for (let i = 0; i < todos.length; i++) {

        // Service indexes all the song links in the list, then gives itself a name depensing on the 
        // type of music streaming service it is, if the service is not found, it will yield a general 
        // answer: "play song here".
        let service = ""

        if (todos[i].songlink.indexOf("youtube") > -1)
            service = "on YouTube"

        if (todos[i].songlink.indexOf("spotify") > -1)
            service = "on Spotify"

        if (todos[i].songlink.indexOf("music","apple") > -1)
            service = "on Apple Music"

        if (todos[i].songlink.indexOf("music","youtube","youtu.be") > -1)
            service = "on Youtube Music"

        if (todos[i].songlink.indexOf("soundcloud") > -1)
            service = "on Soundcloud"

        if (service == "")
            service = "Song here"

        // Append the data for the current todo item to the table
        appendHTML("song-table", `
            <tr>
                <td>${todos[i].songname}</td>
                <td>${todos[i].artist}</td>
                <td><a href="${todos[i].songlink}" target="_blank">Play ${service}</a></td>
                <td><a href="#" onclick="deleteTodo(${i})">Delete</a></td>
            </tr>`
        )
    }
}

// Adds a new todo to the list
function addTodo() {

    // Get the values of the description and due date from the text boxes
    let songname = document.getElementById("new-songname").value
    let artist = document.getElementById("new-artist").value
    let songlink = document.getElementById("new-songlink").value


    // Insert a new todo with the provided information. Notice that we need to use "catIndex" to ensure
    // we are inserting into the proper todo list
    cats[catIndex].todos.push({
        songname: songname,
        artist: artist,
        songlink: songlink,
        isDone: false
    })

    // Save the data to the local browser storage and reload the page
    saveLocal(cats)
    location.reload()
}

// Deletes a todo item
function deleteTodo(todoIndex) {
    let arr = cats[catIndex].todos // Get easier access to the proper todo array
    arr.splice(todoIndex, 1) // Delete the item

    // Save the data to the local browser storage and reload the page
    saveLocal(cats)
    location.reload()
}

// Toggles the completion status of a todo item
function toggleTodo(todoIndex) {

    // Get the current status of the todo item - will be a Boolean true or false
    let curStatus = cats[catIndex].todos[todoIndex].isDone

    // The !curStatus will flip the Boolean value of curStatus to its opposite
    cats[catIndex].todos[todoIndex].isDone = !curStatus

    // Save the data to the local browser storage and reload the page
    saveLocal(cats)
    location.reload()
}

// As soon as the page loads, set the catIndex variable from the URL
let catIndex = getCatIndex()

// Only call outputHTML if getCatIndex didn't return the error code (-1)
if (catIndex > -1)
    outputHTML()
