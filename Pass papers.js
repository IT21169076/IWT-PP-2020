<!DOCTYPE html>
<html>
  <head>
    <title>multiplication table</title>
    <style>
      table {
        background-color: #bde9ba;
      }
    </style>
    <script>
      function createTable() {
        const r = parseInt(document.getElementById("row").value);
        const c = parseInt(document.getElementById("col").value);
 
        var table =
          "<table id='tab' border='1' cellspacing='0' cellpadding='5' width='500'>";
 
        for (let i = 1; i <= r; i++) {
          table += "<tr>";
          for (let j = 1; j <= c; j++) {
            table += "<td>" + i * j + "</td>";
          }
          table += "</tr>";
        }
 
        table += "</table>";
 
        document.getElementById("mTable").innerHTML = table;
      }
    </script>
  </head>
  <body>
    <form action="#">
      <label>How many rows for your multiplication table?</label>
      <input type="text" id="row" /><br /><br />
 
      <label>How many columns for your multiplication table?</label>
      <input type="text" id="col" />
 
      <br /><br />
 
      <button type="submit" onclick="createTable()">
        Draw Multiplication Table
      </button>
    </form>
    <br /><br />
    <div id="mTable"></div>
  </body>
</html>
