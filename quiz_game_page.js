function send() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parsInt(number1) * parsInt(number2);
  question_number = "<h4>" + "number1" + "X" + "number2" + "</h4>";
  input_box = "<h4 class="label">Number 2</h4><input id="number - 2" class="form - control">";
  send_button = "<button onclick="send()" type="button" class="Send">Send</button>";
  row = question_number + input_box + send_button;
  document.getElementById("output").innerHTML = "row";
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}