function addTask() {

    const input = document.getElementById("taskInput");

    if(input.value.trim() === ""){
        alert("請輸入內容");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = input.value;

    span.onclick = function(){
        span.classList.toggle("completed");
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "刪除";

    delBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
