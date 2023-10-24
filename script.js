var mergeAlternately = function (word1, word2) {
	var merged = [];
	var i = 0;
	var j = 0;

	while (i < word1.length || j < word2.length) {
		if (i < word1.length) {
			merged.push(word1[i]);
			i++;
		}

		if (j < word2.length) {
			merged.push(word2[j]);
			j++;
		}
	}

	return merged.join("");
};
console.log(merged);
