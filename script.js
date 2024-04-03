function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lowercase
    let lowerStr = str.toLowerCase();
    let lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the index of the substring
    if (lowerStr.includes(lowerSubStr)) {
        return lowerStr.indexOf(lowerSubStr);
    }
    return -1;
}

// Example usage:
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
