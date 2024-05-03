export default function show_hide(event) {
    
    if (event.target.tagName == 'FORM') {
        event.preventDefault();
        event.target.reset();
    }
    
    let elems = document.getElementById('root').children;
    for (let elem of elems) {
        if(elem !== document.getElementById('root').children[0]) {
            elem.classList.toggle('d-none')
        }
    }

    document.getElementById('sent').classList.toggle('d-none');
}