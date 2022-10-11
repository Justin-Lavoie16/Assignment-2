function calculate() {
  const radius = parseInt(document.getElementById("radius-of-circle").value)

  const area = radius ** 2 * 3.14159

  document.getElementById("area").innerHTML = "Area is: " + area + " "
}
