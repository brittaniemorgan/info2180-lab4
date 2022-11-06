window.onload = function(){

    function searchEvent(){
        const req = new XMLHttpRequest();
        let url = "http://localhost/info2180-lab4/superheroes.php";
        req.onreadystatechange = function(){
            if (req.readyState === XMLHttpRequest.DONE){
            if (req.status === 200){
                alert(req.responseText);
            }}
        }
        req.open("GET", url);
        req.send();

    }
    var searchBtn = document.querySelector("button");
    searchBtn.addEventListener("click", searchEvent)    
};
