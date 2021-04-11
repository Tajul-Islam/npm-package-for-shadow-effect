function shadowizard(options) {
    let images  = document.querySelectorAll('.shadowizard');
    if(options.shadow_type === 'hard') {
        options.shadow_type = '0px'
    } else {
        options.shadow_type = '15px'
    }
    if(options.border_radius === 'round') {
        options.borderRadius = '8px'
    }
    if(options.border_radius === 'circle') {
        options.borderRadius = '50%'
    }
    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`
        if(options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.shadowizard = shadowizard;
