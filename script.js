const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  for (let objectKey in sampleObject) {
    if (key === objectKey) {
      return true;
    }
  }
  return false;
}

// Prompt the user to enter a key and check if it exists in the object
const key = prompt("Enter Key.");
alert(hasKey(key));
