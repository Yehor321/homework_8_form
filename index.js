const btn = document.querySelector(".submit")

btn.addEventListener("click", (e)=> {
    e.preventDefault()

    const form = document.forms.myForm
    const formData = new FormData(form)
    const objectForPayload = {}
    for (let pair of formData.entries()) {
        objectForPayload[pair[0]] - "$" + pair[1]
    }
    console.log(objectForPayload)
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "GET",
        payload: JSON.stringify(objectForPayload),
    })
})