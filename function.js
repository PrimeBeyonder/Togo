function count() {
    document.querySelector('.tasks__item').textContent = document.querySelectorAll('#tasks li').length;
    document.querySelector('.done__item').textContent = document.querySelectorAll('#done li').length;
}

document.querySelector("button").onclick = () => {
    let text = document.querySelector("input").value;
    if (text.trim() == "") {
        document.querySelector("input").value = "";
        document.querySelector("input").focus();
        return false;
    }
    createItem(text);
    count();


    function createItem(text) {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = text;
        document.querySelector("#tasks").appendChild(li);
        document.querySelector("input").value = "";
        document.querySelector("input").focus();

        let check = document.createElement("a");
        check.setAttribute("href", "#")
        check.classList.add("float-start", "me-3", "text-primary", "fa-solid", "fa-check");


        let uncheck = document.createElement("a");
        uncheck.setAttribute('href', '#');
        uncheck.classList.add("float-start", "me-3", "text-warning", "fa-solid", "fa-check");


        check.onclick = () => {
            document.querySelector("#done").appendChild(li);
            check.remove();
            li.appendChild(uncheck);
            count();
        }

        li.appendChild(check);

        uncheck.onclick = () => {
            document.querySelector("#tasks").appendChild(li);
            uncheck.remove();
            li.appendChild(check);
            count();
        }


        let del = document.createElement("a");
        del.setAttribute('href', '#');
        del.classList.add('float-end', 'text-danger', 'fa-solid', 'fa-trash');
        del.onclick = () => {
            li.remove();
            count();
        }
        li.appendChild(del);
    }
    document.querySelector('input').onkeydown = e => {
        if (e.key == "Enter") {
            document.querySelector("button").onclick();
        }
    }
}