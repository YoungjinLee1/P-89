function addUser() {
  var p1 = document.getElementById("p1-name").value;
  var p2 = document.getElementById("p2-name").value;
  localStorage.setItem("player1", p1);
  localStorage.setItem("player2", p2);
  window.location = "quiz_game_page.html";
}