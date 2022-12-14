getText("./data.json")
async function getText(data) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    document.getElementById("demo").innerHTML = myText;
  }