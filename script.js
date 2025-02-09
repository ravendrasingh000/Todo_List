const input = document.querySelector("#npt");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector(".task-list");


addBtn.addEventListener("click", ()=> {
    if(input.value == ""){
        alert("Please Enter Your Task");
    }else{
        const list = document.createElement("li");
        taskList.appendChild(list);
       

// create checkBox
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    list.appendChild(checkBox);

    checkBox.addEventListener("change", ()=> {
        if(checkBox.checked){
            list.classList.add('completed')
        }else{
            list.classList.remove('completed');
        }
    });

// create span tag for add task 
    const text = document.createElement("span");
    text.innerText = input.value;
    list.appendChild(text);
    input.value = "";
    input.focus();

// crate Edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'Edit';
    list.appendChild(editBtn);

     editBtn.addEventListener("click", () => {
            text.contentEditable = true; // Enable editing on span
            text.focus(); // Focus on text for editing

            // Jab user Enter dabaye to editing band ho jaye
     text.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    text.contentEditable = false; // Disable editing
                    text.blur(); // Remove focus
                }
            });
        });


// crate delete button
    const delBtn = document.createElement("button");
    delBtn.classList.add('del-btn');
    delBtn.innerText = 'Delete';
    list.appendChild(delBtn);

delBtn.addEventListener("click", ()=> {
    list.remove();
})











console.log(list);





    }
})