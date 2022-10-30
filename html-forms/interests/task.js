const interest = Array.from(document.querySelectorAll('.interest__check'));

interest.forEach(item => {
    item.addEventListener('change', showChecked)
})

function showChecked() {
    const childElement = Array.from(this.closest('.interest').querySelectorAll('.interest__check'));
    const sibling = Array.from(this.closest('.interests').querySelectorAll('.interest__check'));

    if(!this.closest('.interests').closest('.interest')) {
        childElement.forEach(element => {
        element.checked = this.checked ? true : false;
        })
    }else{
        const parent = this.closest('.interests').closest('.interest').querySelector('.interest__check');
        if(sibling.every(item => item.checked)) {
            parent.indeterminate = false;
            parent.checked = true;
        }else if(sibling.some(item => item.checked)) {
            parent.checked = false;
            parent.indeterminate = true;
        }else{
            parent.checked = false;
            parent.indeterminate = false;
        }
    }
}