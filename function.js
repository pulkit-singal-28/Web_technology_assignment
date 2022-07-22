function opensidemenu(){
    document.getElementById('side').style.width='20%';
    document.getElementById('text').style.marginLeft='21%';
    document.getElementById('text').style.width='80%';
    document.getElementById('navButton').style.visibility = "hidden";
}
function closesidemenu(){
    document.getElementById('side').style.width='0px';
    document.getElementById('text').style.marginLeft='3%';
    document.getElementById('navButton').style.visibility = "visible";
    document.getElementById('text').style.width='100%';
}
