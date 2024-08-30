let codes = document.querySelectorAll(".code")

codes.forEach((code,index)=>{
    code.addEventListener("keydown",(event)=>{
        if(event.key >= "0" && event.key <= "9"){
            event.preventDefault();
            code.value = event.key
            if(codes[index+1]) {
                codes.forEach(code => code.classList.remove("focused"));
                setTimeout(() => codes[index + 1]?.focus(), 10);
                codes[index+1].classList.add("focused")
            }
        } else if(event.key === "Backspace"){
            code.value = ""
            if(codes[index-1]) {
                codes.forEach(code => code.classList.remove("focused"));
                setTimeout(() => codes[index - 1]?.focus(), 10);
                codes[index-1].classList.add("focused")
            }
        }
    })
})