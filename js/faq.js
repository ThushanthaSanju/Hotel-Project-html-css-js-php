var collap = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < collap.length; i++) {
    collap[i].addEventListener("click", function() {
        this.classList.toggle("active1");
        var content1 = this.nextElementSibling;
        if (content1.style.maxHeight){
            content1.style.maxHeight = null;
        } else {
            content1.style.maxHeight = content1.scrollHeight + "px";
        }
        
    })
}