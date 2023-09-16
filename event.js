
const div = document.getElementById("div");
let Btn = document.querySelectorAll(".btn");


Btn.forEach(function(ele){
    ele.addEventListener("click", () => {
        const form = document.createElement("div");
        form.classList.add("form");
    
        form.innerHTML = `

     <form action="https://forms.maakeetoo.com/formsdata/448" method="POST" id="myForm">
        <label for="name">Name</label>
        <input type="text"><br>
        <label for="email">Email</label>
        <input name="Email" id="email" type="email"><br>
        <label for="comment">Comments</label>
        <textarea name="Message" id="textarea"></textarea><br>
        <button type="submit" class="submit">Submit</button>
     </form>
        `;
    
        div.appendChild(form);
    });
});


// const submitData = document.getElementById('myForm');

// submitData.addEventListener('submit', function (event) {
//     event.preventDefault();  

//     const formData = new FormData(event);

//     const endpoint = 'forms.maakeetoo.com/formapi/448'; 
//     const accessCode = 'GRAET2LF4TF6O4G21E6K54KGH'; 

//     const headers = new Headers();
//     headers.append('Code', accessCode);

//     fetch(endpoint, {
//         method: 'POST',
//         body: formData,
//         headers: headers,
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); // Assuming the response is JSON.
//     })
//     .catch(error => {
//         // console.error('There was a problem with the fetch operation:', error);
//     });
// });





