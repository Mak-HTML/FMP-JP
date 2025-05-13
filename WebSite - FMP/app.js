// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAoIS84mC7GsKdST1nN6EvYtQNlgZ8j8lU",
  authDomain: "todoapp-23b52.firebaseapp.com",
  databaseURL: "https://todoapp-23b52-default-rtdb.firebaseio.com",
  projectId: "todoapp-23b52",
  storageBucket: "todoapp-23b52.firebasestorage.app",
  messagingSenderId: "815803323559",
  appId: "1:815803323559:web:e9e47abf47dfa78ae4b782"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Initialize EmailJS with your User ID (replace with your EmailJS User ID)
emailjs.init("nihPSNNhzs0JoJ92E"); // Replace with your EmailJS User ID

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var email = document.getElementById("email").value.trim();
  var address = document.getElementById("address").value.trim();
  var service = document.querySelector("input[name='service']:checked");
  var quantity = document.getElementById("quantity").value.trim();
  var description = document.getElementById("description").value.trim();

  if (!/^[0-9]{10,11}$/.test(phone)) {
    alert("Enter a valid phone number (10 or 11 digits).");
    return;
  }

  var orderData = {
    name,
    phone,
    email,
    address,
    service: service ? service.value : "Not selected",
    quantity,
    description,
    timestamp: new Date().toISOString()
  };

  // Save to Firebase Realtime Database
  database.ref('orders').push(orderData)
    .then(() => {
      // Fetch the latest order from Firebase
      database.ref('orders').limitToLast(1).once('value')
        .then((snapshot) => {
          const latestOrder = snapshot.val();
          if (latestOrder) {
            const orderKey = Object.keys(latestOrder)[0];
            const order = latestOrder[orderKey];

            // Send email using EmailJS
            emailjs.send("naqi77", "template_01pg26y", {
              to_email: "snmakhmoor@gmail.com", // Replace with actual email
              from_name: order.name,
              from_email: order.email,
              phone: order.phone,
              address: order.address,
              service: order.service,
              quantity: order.quantity,
              description: order.description,
              timestamp: order.timestamp
            })
            .then(() => {
              console.log("Email sent successfully:", order);
              alert("Your order has been submitted and emailed successfully!");
              document.getElementById("orderForm").reset();
            })
            .catch((error) => {
              console.error("Email sending failed:", error);
              alert("Order submitted, but email failed to send. Please contact support.");
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching order from Firebase:", error);
          alert("Order submitted, but email failed to send. Please contact support.");
        });
    })
    .catch((error) => {
      console.error("Error saving order to Firebase:", error);
      alert("There was an error submitting your order. Please try again.");
    });
});