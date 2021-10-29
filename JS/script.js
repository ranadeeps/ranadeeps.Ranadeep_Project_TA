function run(){
    let text = document.getElementById('inp').value;
    let arr1 = text.split(" ");
    let arr2 = text.split(".");
    let re = document.getElementById('res');
    re.style.display = "initial";
    let an = document.getElementById('ans');
    let c = an.lastElementChild;
    while(c)
    {
        an.removeChild(c);
        c = an.lastElementChild;
    }
    let head = document.createElement("h1");
    head.innerText = "Text Report";
    an.appendChild(head);
    let dline = document.createElement("h6");
    let line = ""
    for (let index = 0; index < 60; index++) {
        line = line + "-"
    }
    dline.innerText = line;
    an.appendChild(dline);
    let wc = document.createElement('h6');
    wc.innerText = "Word Count: "+ arr1.length;
    an.appendChild(wc);
    let sc = document.createElement('h6');
    sc.innerText = "Sentence Count: "+ arr2.length;
    an.appendChild(sc);
    // var dl = html2pdf().from(an).save();
}
function clr(){
    let text = document.getElementById('inp');
    text.value = "";
}