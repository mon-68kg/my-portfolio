function show_hide() {
    
    let elems = document.getElementById('root').children;
    for (let elem of elems) {
        if(elem !== document.getElementById('root').children[0]) {
            elem.classList.toggle('d-none')
        }
    }

    document.getElementById('sent').classList.toggle('d-none');
}

export default function handleSubmit(event) {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => show_hide())
      .catch((error) => alert(error));
};