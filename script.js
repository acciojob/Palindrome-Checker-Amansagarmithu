// complete the given function

function palindrome(str){
	let n = str.length;
	let start = 0;
	let end = n-1;
	while(start<end){
		if(str.charAt(start)!=str.charAt(end)){
			return false;
		}
		start++;
		end--;
	}
	return true;
}
module.exports = palindrome
