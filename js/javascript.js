function toggle(target, trigger){
    var status = document.getElementById(target).style.display;


    if (document.getElementById(target).className == "open"){
        document.getElementById(target).className = "close";
        trigger.classList.remove('expanded');
    } else {
        //document.getElementById(target).style.display = 'block';
        document.getElementById(target).className = "open";
        trigger.classList.add('expanded');
    } 
}