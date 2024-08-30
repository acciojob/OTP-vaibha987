let codes = document.querySelectorAll(".code")
// change, input
 codes.forEach((code,index)=>{
    
    code.addEventListener("keydown",(event)=>{
	if(event.key>="0" && event.key<="9"){
		event.preventDefault();
		code.value=event.key
		if(codes[index+1])
		codes[index+1].focus()
		codes[index+1].classList.add("focused")
	}
		else if(event.key==="Backspace"){
		code.value=""
			if(codes[index-1]){
		   codes[index-1].focus()
		   codes[index-1].classList.add("focused")		
		}
		}
	})
 })