//1 要素の取得
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
//console.log(empties);

//2 ドラッグのトリガー
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//4 1つ1つのempty要素を取得
for(const empty of empties){
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragover", dragEnter);
    empty.addEventListener("dragover", dragLeave);
    empty.addEventListener("dragover", dragDrop);
}

//3 ドラッグ関数
function dragStart() {
    console.log("start");
    fill.className += " hold"; //付け足す
    setTimeout(() => (fill.className = "invisible"), 0);
}

function dragEnd(){
    console.log("end");
    fill.className = "fill";
}

function dragOver(e){
    e.preventDefault();
    console.log("over");
}
function dragEnter(){
    console.log("enter");
    this.className += "hovered";
}
function dragLeave(){
    console.log("leave");
    this.className = "empty";
}

function dragDrop(){
    console.log("drop");
    this.className = "empty";
    this.appendChild(fill);
}

