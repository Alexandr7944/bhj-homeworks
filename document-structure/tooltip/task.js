const hasTooltip = document.querySelectorAll('.has-tooltip');

for(let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', function(event) {
        event.preventDefault();

        if(document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').remove();
        }
        
        let { x, y } = this.getBoundingClientRect();
        this.insertAdjacentHTML('afterEnd', `
        <div class="tooltip tooltip_active" style="left: ${x}px; top: ${y + 30}px">
            ${this.title}
        </div>`);
    })

    hasTooltip[i].addEventListener('mouseout', function() {
        if(document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').remove();
        }
    })
}