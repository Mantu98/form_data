
const div = document.getElementById("div");
let Btn = document.querySelectorAll(".btn");


Btn.forEach(function(ele){
    ele.addEventListener("click", () => {
         
        const form = document.createElement("div");
        form.classList.add("form");
    
        form.innerHTML = `

     <form method="POST" id="myForm">
        <label for="name">Name</label>
        <input type="text" id="name"><br>
        <label for="email">Email</label>
        <input name="Email" id="email" type="email"><br>
        <label for="Message">Comments</label>
        <textarea name="Message" id="textarea"></textarea><br>
        <button type="submit" id="submit">Submit</button>
     </form>
        `;
    
        div.appendChild(form);
    });
});

document.getElementById("submit").addEventListener("submit", makerequest);

function makerequest(e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let textarea = document.getElementById("textarea");

    console.log("button clicked");
    const myData = {
        method: "POST",
        headers: {
            "content-Type" : "application/json"
        },
        body: JOON.stringify({name: name, email: email, textarea: textarea}) 
    }
      console.log("Body:", myData.body)
      const api = "https://forms.maakeetoo.com/formsdata/448";
    fetch("api", myData).then((res) => {
        if(!res.ok) {
            throw Error(res.statusText)
        }
        return res.json();
    }).then((data) => {
        console.log(data)
    })

}




