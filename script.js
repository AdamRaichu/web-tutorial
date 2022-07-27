document.addEventListener("DOMContentLoaded", function () {

document.getElementById("code-ex1").innerText = `
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1>Header</h1>
    <p>The HTML in this example is the same as in the other two, except for CSS and JS references.</p>
    <span>Counter: <b id="count">0</b>.</span>
  </body>
</html>
`;

  document.getElementById("code-ex2-inline").innerText = `<link href="style.css" rel="stylesheet">`;
  
  document.getElementById( "code-ex2-main").innerText = `
body {
  background-color: darkblue;
  color: whits;
}

b {
  color: blue;
  text-size: 20px;
}
  `;
});
