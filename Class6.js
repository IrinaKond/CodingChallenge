function detectWord(str) {
	let word = '';
		
	for (let i = 0; i < str.length; i++) {
		if ((str.charCodeAt(i) < 97) || (str.charCodeAt(i) > 122)) {
				continue;
		}
		word += str[i];
	}
return word;
}
