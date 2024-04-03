function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let lowerStr = str.toLowerCase();
    let lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the index of the substring
	if (lowerStr.contains(lowerSubStr)) {
		return lowerStr.indexOf(lowerSubStr);
	}
    return-1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
