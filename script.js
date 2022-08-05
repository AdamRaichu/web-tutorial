document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("code-ex1").innerHTML = hljs.highlight(`
<!DOCTYPE html>
<html>

<head>
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <h1>Header</h1>
  <p>The HTML in this example is the same as in the other two, except for CSS and JS file references.</p>
  <span>Counter: <b id="count">0</b>.</span>
</body>

</html>
`, {
    language: "xml"
  }).value;

  document.getElementById("code-ex2-inline").innerHTML = hljs.highlight(`<link href="style.css" rel="stylesheet">`, { language: "xml" }).value;

  document.getElementById("code-ex2-main").innerHTML = hljs.highlight(`
body {
  background-color: darkblue;
  color: white;
}

b {
  color: blue;
  font-size: 20px;
}
  `, { language: "css" }).value;
});
