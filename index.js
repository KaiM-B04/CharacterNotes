//This isn't really a finished file, but it works.
//The idea was to create a site that lets you add notes and customize things for a character that you're making.
//I wanted to make something that could be used for anything, from writing, npc ideas, roleplay(type dnd etc) or anything else
//which I intend to come back to later.

//HTML elements
const inputField = document.getElementById("newNote");
const noteList = document.getElementById("noteList");
const addNoteButton = document.getElementById("addBtn");

//Function for the full page

//local storage:
document.addEventListener("DOMContentLoaded", function () {
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach((note) => {
    createNoteElement(note);
  });

  //adding to the notepad, with both click and keypress
  addNoteButton.addEventListener("click", addNote);
  newNote.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addNote();
    }
  });

  // Input function
  // More options might come later, like hair color, skin color, age, height, etc.

  function addNote() {
    const newInput = inputField.value.trim();
    if (newInput.length >= "0") {
      const noteText = { text: captalizeFirstLetter(newInput), id: Date.now() };
      savedNotes.push(noteText);
      localStorage.setItem("notes", JSON.stringify(savedNotes));
      createNoteElement(noteText);
      inputField.value = "";
    } else {
      alert("Input field can't be empty!");
    }
  }

  //Actual list function

  function createNoteElement(note) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${note.text}</span>
      <button data-id="${note.id}">Remove</button>
      `;
    noteList.appendChild(li);
    const removeBtn = li.querySelector("button");
    removeBtn.addEventListener("click", function () {
      const noteId = parseInt(this.getAttribute("data-id"));
      savedNotes = savedNotes.filter((note) => note.id !== noteId);
      localStorage.setItem("notes", JSON.stringify(savedNotes));
      li.remove();
    });
  }

  function captalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});

// Jeg prøvde med en del forskjellige oppsett, men fikk ikke local storage til å virke. :(
//
