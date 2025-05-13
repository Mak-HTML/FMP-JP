// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAoIS84mC7GsKdST1nN6EvYtQNlgZ8j8lU",
    authDomain: "todoapp-23b52.firebaseapp.com",
    databaseURL: "https://todoapp-23b52-default-rtdb.firebaseio.com",
    projectId: "todoapp-23b52",
    storageBucket: "todoapp-23b52.firebasestorage.app",
    messagingSenderId: "815803323559",
    appId: "1:815803323559:web:a50de4ef303ca855e4b782"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  // Add a new task
  function addTodo() {
    var input = document.getElementById("todoInput");
    var todoText = input.value.trim();
  
    if (todoText === "") {
      alert("Please enter a task");
      return;
    }
  
    var newRef = database.ref("todos").push();
    var todo = {
      id: newRef.key,
      todo_value: todoText
    };
  
    newRef.set(todo);
    input.value = "";
  }
  
  // Fetch and display tasks
  function getTodos() {
    var list = document.getElementById("items_data");
    list.innerHTML = "";
  
    database.ref("todos").on("value", function(snapshot) {
      list.innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
        var data = childSnapshot.val();

         // ✅ Log the data to the console
      console.log("Fetched To-Do:", data);
  
        var li = document.createElement("li");
        li.textContent = data.todo_value;
        li.setAttribute("data-id", data.id);
  
        // Edit button
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.style.marginLeft = "10px";
        editBtn.onclick = function() {
          var newValue = prompt("Edit task:", data.todo_value);
          if (newValue) {
            updateTodo(data.id, newValue);
          }
        };
  
        // Delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "5px";
        deleteBtn.onclick = function() {
          deleteTodo(data.id);
        };
  
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
    });
  }
  
  // Update a single task
  function updateTodo(id, newValue) {
    database.ref("todos/" + id).update({
      todo_value: newValue
    });
  }
  
  // Delete a single task
  function deleteTodo(id) {
    database.ref("todos/" + id).remove();
  }
  
  // Delete all tasks
  function deleteAll() {
    database.ref("todos").remove();
  }
  
  // Load todos on page load
  window.onload = getTodos;
  