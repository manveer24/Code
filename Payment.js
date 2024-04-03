// Function to update QR code with payment information
function updateQRCode(upiID) {
  var upiURL = "upi://pay?pa=" + encodeURIComponent(upiID);
  var qr = new QRious({
    element: document.getElementById("qr-code"),
    value: upiURL,
    size: 200,
  });
}

// Update QR code initially with UPI ID
updateQRCode("vaghelamanan1645@okhdfcbank");

// Update QR code and total price when subject selection changes
document.getElementById("subjects").addEventListener("change", function () {
  // Get the selected option
  var selectedOption = this.options[this.selectedIndex];
  // Get the price of the selected option
  var price = parseFloat(selectedOption.getAttribute("data-price"));
  // Update the total price display
  document.getElementById("total-price").textContent = price;
  // Update the QR code with the new total amount
  updateQRCode("vaghelamanan1645@okhdfcbank");
});
// Generate QR code
var qr = new QRious({
  element: document.getElementById("qr-code"),
  value: "YOUR_PAYMENT_INFORMATION_HERE", // Replace this with your payment information
  size: 200,
});

document.getElementById("subjects").addEventListener("change", function () {
  // Get the selected option
  var selectedOption = this.options[this.selectedIndex];
  // Get the price of the selected option
  var price = parseFloat(selectedOption.getAttribute("data-price"));
  // Update the total price display
  document.getElementById("total-price").textContent = price;
});

// Function to update QR code with payment information
function updateQRCode(upiID, amount) {
  var upiURL =
    "upi://pay?pa=" +
    encodeURIComponent(upiID) +
    "&pn=Registration&am=" +
    encodeURIComponent(amount) +
    "&tn=Registration Payment";
  var qr = new QRious({
    element: document.getElementById("qr-code"),
    value: upiURL,
    size: 200,
  });
}

// Update QR code initially with UPI ID and 0 amount
updateQRCode("vaghelamanan1645@okhdfcbank", 0);

// Update QR code and total price when subject selection changes
document.getElementById("subjects").addEventListener("change", function () {
  // Get the selected option
  var selectedOption = this.options[this.selectedIndex];
  // Get the price of the selected option
  var price = parseFloat(selectedOption.getAttribute("data-price"));
  // Update the total price display
  document.getElementById("total-price").textContent = price;
  // Update the QR code with the new total amount
  updateQRCode("vaghelamanan1645@okhdfcbank", price);
});
