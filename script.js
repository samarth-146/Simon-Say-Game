let playerArr=[];
let gameSeq=[];
let game_start=false;
let level=0;
let randomColorArray=["yellow","red","green","blue"];

let h2=document.querySelector("h2");
document.addEventListener("keydown",()=>{
    if(game_start==false)
    {
        game_start=true;
        Level();
    }
});

function flashbutton(btn)
{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250)
}

function Level()
{
    playerArr=[];
    level++;
    h2.innerText=`Level-${level}`;

    let randomColor=Math.floor(Math.random()*3);
    let randColor=randomColorArray[randomColor];
    let btn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    flashbutton(btn);
}
function check(index)
{
    if(playerArr[index]==gameSeq[index])
    {
        if(playerArr.length==gameSeq.length)
        {
           setTimeout(Level,1000);
        }
    }
    else{
        document.documentElement.classList.add("redcolor");
        setTimeout(()=>{
            document.documentElement.classList.remove("redcolor");
        },100) 
        h2.innerText=`You Lost! Try Again,Your Score was ${level}. Press Any Key To Start The Game`;
        reset();

    }

}
function userbtnpress()
{
    let btn=this;
    let user_color=btn.getAttribute("id");
    playerArr.push(user_color);
    flashbutton(btn);
    check(playerArr.length-1);

}
let btn=document.querySelectorAll(".box");
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",userbtnpress);
}
function reset()
{
    playerArr=[];
    gameSeq=[];
    level=0;
    game_start=false;
}