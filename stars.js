<script>
const stars = function(n){
    if (n===0) {
    return '';
  }
    else {return '*' + stars(n-1);
  }
}
const spaces = function(n){
	if (n===0){
	return '';
	}
    else {
    return ' ' + spaces(n-1);
    }
}

const stars1 = function(numSpaces,numStars, n){
	if (n===0){
	return ;
	}
	else {
	console.log(spaces(numSpaces)+stars(numStars));
	stars1(numSpaces-1, numStars+2, n-1);
	
	}
}
const triangleStars = function(n) {
	stars1 (n-1,1,n);
}
triangleStars(5);

</script>