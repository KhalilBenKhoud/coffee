var images = []


images[0] =  'img/1.jpg'
images[1] =  'img/2.jpg'
images[2] =  'img/3.jpg'

var i = 0

function changeImg()
{
   document.slide.src = images[i]
  if(i < images.length - 1)
  {
      i++
  }
  else {
      i = 0
  }
  setTimeout(changeImg,2000)
}


window.addEventListener("load", () => {
    changeImg()
})



var text = document.getElementsByClassName("title")[0]
var textLine = text.innerText
var split = textLine.split("")
console.log(split)
text.innerText = ""

for(let i=0; i< split.length ; i++)
{
    text.innerHTML += "<span>" + split[i] + "</span>"
}
    var timer = setInterval(onTick,50)
    let char = 0
    function onTick()
    {  
        var span = document.getElementsByTagName("span")[char]
        span.classList.add("fade")
        char++
    
        if(char == split.length)
        {   
            text.style.color = "rgba(192, 45, 45, 0.9)"
            clearInterval(timer)
            timer = null
            return
        }
    
    }



    AOS.init({
        offset: 300, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
      });



var menu = document.getElementsByClassName("menu")[0]
var close = document.getElementsByClassName("close")[0]
var list = document.getElementsByTagName("ul")[0]


menu.addEventListener("click", () => {
    list.style.display = "block"
})

close.addEventListener("click", () => {
    list.style.display = ""
})

