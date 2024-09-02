var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]
var allSongs = document.querySelector("#all-songs")
 var clutter="";
 var selectedSong = 0

 var audio=new Audio();

 function mainFunction(){
    arr.forEach(function(elem,index){
        clutter += `<div class="song-card">
        <div class=${index}>
            <img src=${elem.url}/>
        </div>
        <h2>${elem.songName}</h2>
            <h4>3:46</h4>
       
    </div>`;
    })
   allsongs.innerHTML = clutter;
   audio.src=arr[selectedSong].url
 } 

mainFunction();

allSongs.addEventListener('click',function(dets){
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play();
})

play.addEventListener('click',funtion)

