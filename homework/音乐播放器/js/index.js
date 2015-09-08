/**
 * Created by Wikiprofly on 2015/8/17.
 */
var songDetails = [["三人行","方大同"],["爱囚","庄心妍"],["在水一方","好妹妹乐队"],["Mother","菊次郎的夏天"],["走在冷风中","刘思涵"],["囚鸟","彭羚"]];

function playMusic(index){
    var Oaudio = document.getElementById("audioPlayer");
    Oaudio.setAttribute("src", "source/"+index+".mp3");
    playIt();
}
/*
 *  上一曲
 */
function previous(){
    var Oaudio = document.getElementById("audioPlayer");
    var songName = document.getElementById("songName");
    var singer = document.getElementById("singer");
    var index = Number(Oaudio.getAttribute("src").slice(-5,-4))-1;
    if(index<1){
        Oaudio.setAttribute("src", "source/6.mp3");
        songName.innerHTML = songDetails[5][0];
        singer.innerHTML = songDetails[5][1];
    }
    else{
        Oaudio.setAttribute("src", "source/"+index+".mp3");
        songName.innerHTML = songDetails[index-1][0];
        singer.innerHTML = songDetails[index-1][1];
    }
    playIt();
}
/*
 *  下一曲
 */
function next(){
    var Oaudio = document.getElementById("audioPlayer");
    var songName = document.getElementById("songName");
    var singer = document.getElementById("singer");
    var index = Number(Oaudio.getAttribute("src").slice(-5,-4))+1;
    if(index>6){
        Oaudio.setAttribute("src", "source/1.mp3");
        songName.innerHTML = songDetails[0][0];
        singer.innerHTML = songDetails[0][1];
    }
    else{
        Oaudio.setAttribute("src", "source/"+index+".mp3");
        songName.innerHTML = songDetails[index-1][0];
        singer.innerHTML = songDetails[index-1][1];
    }
    playIt();
}
/*
 *  控制播放和暂停
 */
function playIt(){
    var Oaudio = document.getElementById("audioPlayer");
    var Oplaybtn = document.getElementById("playBtn");
    if(Oaudio.paused){
        Oaudio.play();
        progress(Oaudio);
        Oplaybtn.style.background = "url('images/pause.gif')";
    }else{
        Oaudio.pause();
        Oplaybtn.style.background = "url('images/play.gif')";
    }
}
/*
 * 同步显示播放的时间
 */
function progress(Oaudio){
    var Ospan = document.getElementById("progress");
    var tag = setInterval(function(){
        if(Oaudio.currentTime!=Oaudio.duration){
            Ospan.innerHTML = toMinutes(Oaudio.currentTime) + "/" + toMinutes(Oaudio.duration);
        }else{
            clearInterval(tag);
        }
    },1000);
}
/*
 * 把播放时间转换为分钟和秒的显示方式
 */
function toMinutes(num){
    var sec = parseInt(num);
    var minutes = Math.floor(sec/60);
    var secleft = sec%60;
    return minutes + ":" + secleft;
}