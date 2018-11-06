var ticketNumber = 1

function takeANumber(line) {
  line.push(ticketNumber);
  return `Welcome, ${ticketNumber++}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var number = 0;
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    number = line.shift();
    return `Currently serving ${number}.`;
  }
}

function currentLine(line) {
  var string = "The line is currently: ";
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length - 1; i++) {
      string = string.concat(`${i + 1}. ${line[i]}, `);
    }
    string = string.concat(`${i + 1}. ${line[i]}`);
  }
  return string;
}
