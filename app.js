window.onload = function(){
    let heroText = document.getElementById("heroText");
    var searchBtn = document.querySelector("button");
    const req = new XMLHttpRequest();
    function defaultAction(){
        let url = "http://localhost/info2180-lab4/superheroes.php";
        req.onreadystatechange = function(){
        if (req.readyState === XMLHttpRequest.DONE){
            if (req.status === 200){
                document.querySelector("div").innerHTML = req.responseText;
            }}
        }
        req.open("GET", url);
        req.send();
    }

    function findHero(){
        let url = "http://localhost/info2180-lab4/superheroes.php?heroName=" + heroText.value;
        req.onreadystatechange = function(){
            if (req.readyState === XMLHttpRequest.DONE){
                if (req.status === 200){
                    document.querySelector("div").innerHTML = req.responseText;
                }}
            }
            req.open("GET", url);
            req.send();
    }

    function searchEvent(e){
        e.preventDefault();
        document.querySelector("div").innerHTML = "";
        heroText.value = heroText.value.trim();
        if (heroText.value == ""){
            defaultAction(e);
        }
        else{
            findHero(heroText.innerHTML);
        }
    }   
    searchBtn.addEventListener("click", searchEvent)    
};
