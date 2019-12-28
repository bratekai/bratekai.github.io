// var coll = document.getElementsByClassName("collapsible");
// var i;

for (i=0; coll.item.length; i++){
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSybling;
        if(content.style.maxHeight) {
            content.style.maxHeight;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}