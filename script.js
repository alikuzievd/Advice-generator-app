fetch("https://api.adviceslip.com/advice").then((response) => {
    return response.json();
}).then((adviceObj) => {
    const advice = adviceObj.slip;
    $(".p-1").text("ADVICE #" + advice.id)
    $(".p-2").text('"' + advice.advice + '"')
});

$(document).ready(function(){
    let desktopSize = window.matchMedia("(min-width: 376px)");
    if (desktopSize.matches){
        $(".icon").click(function(){
            fetch("https://api.adviceslip.com/advice").then((response) => {
                return response.json();
            }).then((adviceObj) => {
                const advice = adviceObj.slip;
                $(".p-1").text("ADVICE #" + advice.id)
                $(".p-2").text('"' + advice.advice + '"')
            });
        })
    }
    else {
        $(".icon").click(function(){
            fetch("https://api.adviceslip.com/advice").then((response) => {
                return response.json();
            }).then((adviceObj) => {
                const advice = adviceObj.slip;
                $(".p-1").text("ADVICE #" + advice.id)
                $(".p-2").text('"' + advice.advice + '"')
            });            
        })        
    }
});
