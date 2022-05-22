//callback function chỉ đơn giản là function được dùng làm tham số truyền vào một function khác
//tác dụng của nó là xử lý bất đồng bộ

// setInterval(time, 1000);

// function time() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML =
//     d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function getFile(myCallback) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "mycar.html");
//   req.onload = function () {
//     if (req.status == 200) {
//       myCallback(this.responseText);
//     } else {
//       myCallback("Error: " + req.status);
//     }
//   };
//   req.send();
// }

// getFile(myDisplayer);
