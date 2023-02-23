// added blog page with event listeners
document.getElementById("add-blog").addEventListener("click", () => {
  console.log("add-blog");
  window.open("blog.html", "_blank");
});

// calculation section started
let serial = 0;

// triangle section started
document.getElementById("triangle-btn").addEventListener("click", () => {
  let firsttriangle = getId("input-b");
  let secondtriangle = getId("input-h");
  let geoTitle = gettittle("triangle-title");
  let trianglecalculation = 0.5 * firsttriangle * secondtriangle;

  //   validation
  if (
    isNaN(firsttriangle) ||
    isNaN(secondtriangle) ||
    firsttriangle <= 0 ||
    secondtriangle <= 0
  ) {
    alert(
      "Either or both inputs are not a number or empty or negative numbers"
    );
    document.getElementById("input-b").value = "";
    document.getElementById("input-h").value = "";
    return;
  }
  getcommoncalculation(geoTitle, trianglecalculation);
});

// rectangle section started
document.getElementById("rectangle-btn").addEventListener("click", () => {
  let rectanglefirst = getId("rectangle-input1");
  let rectanglesecond = getId("rectangle-input2");
  let rectangle = rectanglefirst * rectanglesecond;

  let rectitle = gettittle("rectangle-title");

  //   validation
  if (
    isNaN(rectanglefirst) ||
    isNaN(rectanglesecond) ||
    rectanglefirst <= 0 ||
    rectanglesecond <= 0
  ) {
    alert(
      "Either or both inputs are not a number or empty or negative numbers"
    );
    document.getElementById("rectangle-input1").value = "";
    document.getElementById("rectangle-input2").value = "";
    return;
  }
  getcommoncalculation(rectitle, rectangle);
});

// paragraph section started
document.getElementById("parallelogram-btn").addEventListener("click", () => {
  let parallelograminput1 = forinnerTextvalue("parallelogram-base");
  let parallelograminput2 = forinnerTextvalue("parallelogram-height");
  let totaltquation =
    parseFloat(parallelograminput1) * parseFloat(parallelograminput2);

  let parallelogramtitle = gettittle("parallelogram-title");

  getcommoncalculation(parallelogramtitle, totaltquation);
});

// rhombus section
document.getElementById("rhombus-btn").addEventListener("click", () => {
  let rhombusinput1 = forinnerTextvalue("rhombus-d1");
  let rhombusinput2 = forinnerTextvalue("rhombus-d2");
  let totalrhombus = 0.5 * rhombusinput1 * rhombusinput2;

  let rhombustitle = gettittle("rhombus-title");
  getcommoncalculation(rhombustitle, totalrhombus);
});

// pentagon secction started
document.getElementById("pentagon-btn").addEventListener("click", () => {
  let pentagoninput1 = forinnerTextvalue("pentagon1");
  let pentagoninput2 = forinnerTextvalue("pentagon2");
  let totalpentagon = 0.5 * pentagoninput1 * pentagoninput2;

  let pentagontitle = gettittle("pentagon-title");
  getcommoncalculation(pentagontitle, totalpentagon);
});

// ellipse section started
document.getElementById("ellipse-btn").addEventListener("click", () => {
  let ellipseinpt1 = forinnerTextvalue("ellipse1");
  let ellipseinpt2 = forinnerTextvalue("ellipse2");
  let totalellipse = (Math.PI * ellipseinpt1 * ellipseinpt2).toFixed(2);
  let ellipsetitle = gettittle("ellipse-title");
  getcommoncalculation(ellipsetitle, totalellipse);
});




// funtion to get tittle=====================
function gettittle(title) {
  let titlegeo = document.getElementById(title).innerText;
  return titlegeo;
}

// common funtion to get Id for input field==============
function getId(Id) {
  let inputbase = document.getElementById(Id).value;
  let inputbnum = parseFloat(inputbase);
  return inputbnum;
}

// common id for declared input field
function forinnerTextvalue(Id) {
  let firstinputinner = document.getElementById(Id).innerText;
  let inputinnernum = parseFloat(firstinputinner);
  return inputinnernum;
}

// common functions added in html =====================
function getcommoncalculation(geoTitle, trianglecalculation) {
  serial += 1;
  let tr = document.createElement("tr");
  tr.innerHTML = `
     <td>${serial}</td>
     <td>${geoTitle}</td>
     <td>${trianglecalculation}cm<sup>2</sup></td>
     <td><button class="btn btn-primary">convert to m2</button></td>
     `;
  document.getElementById("container-for-append").appendChild(tr);
}



// ====================== bg color =====================

var cards = document.getElementsByClassName('card');
var colors = ['#ffcccc', '#778beb', '#ea8685', '#f7d794', '#f8a5c2', '#b8e994','#1e3799', '#079992'];

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseenter', function() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
  });
  cards[i].addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
  });
}


