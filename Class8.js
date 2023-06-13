function charCount(myChar, str) {
	let sum = 0;
	for( let i = 0; i < str.length; i ++) {
		if (myChar === str[i]) {
			sum +=1;
		}
	}
	return sum;
}
