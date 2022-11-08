
let total = document.getElementById("total")
let count = 0;

setInterval(function() 
{
    let div = document.createElement("div");
    div.classList.add("dot");
    div.style.top = generateRamdom();
    div.style.left = generateRamdom();
    div.style.setProperty("--left", generateRamdom());
    document.body.appendChild(div);

    div.addEventListener("click", function()
    {
        div.classList.add("erase");
        count++;
        total.innerText = count;
    })

}, 1000);



function generateRamdom()
{
    return Math.random() * 1200 + 50 + "px";
}


