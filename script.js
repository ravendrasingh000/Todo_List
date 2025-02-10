const input = document.querySelector("#npt");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector(".task-list");


addBtn.addEventListener("click", ()=> {
    if(input.value == ""){
        alert("Please Enter Your Task");
    }else{
        const list = document.createElement("li");
        taskList.appendChild(list);
        list.classList.add("list");
       

// create checkBox
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    list.appendChild(checkBox);
    checkBox.classList.add("check-box");

    checkBox.addEventListener("change", ()=> {
        if(checkBox.checked){
            text.classList.add('completed')
        }else{
            text.classList.remove('completed');
        }
    });

// create span tag for add task 
    const text = document.createElement("span");
    text.innerText = input.value;
    text.classList.add("span");
    list.appendChild(text);
    input.value = "";
    input.focus();

// crate Edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("fa-solid", "fa-pen-to-square");
    list.appendChild(editBtn);
    editBtn.classList.add("edit-btn");

     editBtn.addEventListener("click", () => {
            text.contentEditable = true; 
            text.focus(); 
            text.style.backgroundColor = 'black';
            text.style.color = "white"

            // Jab user Enter dabaye to editing band ho jaye
     text.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    text.contentEditable = false; // Disable editing
                    text.blur(); // Remove focus
                    text.style.backgroundColor = '';
                    text.style.color = "";
                }
            });
        });


// crate delete button
    const delBtn = document.createElement("button");
    delBtn.classList.add("fa-solid", "fa-trash");
    list.appendChild(delBtn);
    delBtn.classList.add("del-btn");

delBtn.addEventListener("click", ()=> {
    list.remove();
})
    }
})