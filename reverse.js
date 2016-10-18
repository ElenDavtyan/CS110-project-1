<script>

const array = ["Table", "Chair", "Computer", "Lamp", "Highlighter"];
const reverse = function(arr){
	if (arr===0){
		return ""
	}
		
    console.log(array[arr-1]);
    return reverse(arr-1)
    
   
}

reverse(5)

</script>