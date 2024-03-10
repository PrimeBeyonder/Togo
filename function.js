document.querySelector("button").onclick = () => {
    let text = document.querySelector("input").value;
    if (text.trim() == "") {
        document.querySelector("input").value = "";
        document.querySelector("input").focus();
        return false;
    }
    createItem(text);


    function createItem(text) {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = text;
        document.querySelector("#tasks").appendChild(li);
        document.querySelector("input").value = "";
        document.querySelector("input").focus();
    }
    document.querySelector('input').onkeydown = e => {
        if (e.key == "Enter") {
            document.querySelector("button").onclick();
        }
    }
}