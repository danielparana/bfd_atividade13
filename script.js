let input = document.getElementById("taskInput");
let btn = document.getElementById("addBtn");
let lista = document.getElementById("taskList");

btn.addEventListener("click", function() {
    let texto = input.value.trim();

    if (texto === "") {
        alert("por favor, digite uma tarefa.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = texto;

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.classList.add("remove");

    botaoRemover.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(botaoRemover);
    lista.appendChild(li);

    input.value = "";
});
