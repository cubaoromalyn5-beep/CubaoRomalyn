function sayHello() {
      alert("Hello, everyone!");
    }

    function showInput() {
      let text = document.getElementById("userInput").value;
      document.getElementById("output").innerText = text;
    }

    document.getElementById("hoverText").onmouseover = function () {
      this.classList.add("hovered");
    };

    document.getElementById("hoverText").onmouseout = function () {
      this.classList.remove("hovered");
    };



