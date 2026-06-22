javascript:(function(){
    var targetText = 'timetable';
    var navLinks = document.querySelectorAll('a, li, div, span');
    var targetEl = null;
    
    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].textContent.trim().toLowerCase() === targetText) {
            targetEl = navLinks[i].closest('li') || navLinks[i].parentElement;
            break;
        }
    }
    
    if (!targetEl) {
        targetEl = document.querySelector('.navigation-menu, .sidebar, ul, nav') || document.body;
    }
    
    if (document.getElementById('semag-custom-item')) return;
    
    var style = document.createElement('style');
    style.innerHTML = `
        #semag-panel { position: fixed; top: 0; right: 0; width: 45%; height: 100%; background: #fff; z-index: 999999; box-shadow: -5px 0 15px rgba(0,0,0,0.3); border-left: 2px solid #ccc; display: none; }
        #semag-panel iframe { width: 100%; height: 100%; border: none; }
        #semag-close { position: absolute; top: 10px; left: -40px; width: 35px; height: 35px; background: #e74c3c; color: #fff; text-align: center; line-height: 35px; font-weight: bold; cursor: pointer; border-radius: 4px 0 0 4px; font-family: sans-serif; z-index: 1000000; }
        .semag-icon-span { display: inline-flex; align-items: center; justify-content: center; margin-right: 8px; font-size: 1.2em; vertical-align: middle; }
    `;
    document.head.appendChild(style);
    
    var newItem = targetEl.cloneNode(true);
    newItem.id = 'semag-custom-item';
    
    if (newItem.classList.contains('active')) {
        newItem.classList.remove('active');
    }
    
    var clickableElement = newItem.querySelector('a') || newItem;
    clickableElement.setAttribute('href', '#');
    
    var textContainer = null;
    var innerElements = clickableElement.querySelectorAll('*');
    if (innerElements.length > 0) {
        for (var j = 0; j < innerElements.length; j++) {
            if (innerElements[j].textContent.trim().toLowerCase() === targetText) {
                textContainer = innerElements[j];
                break;
            }
        }
    }
    
    if (textContainer) {
        textContainer.textContent = 'semag';
    } else {
        clickableElement.textContent = 'semag';
    }
    
    var existingIcon = clickableElement.querySelector('i, svg, img, .icon, .v-icon');
    if (existingIcon) {
        var gameIcon = document.createElement('span');
        gameIcon.className = 'semag-icon-span';
        gameIcon.innerHTML = '🎮';
        existingIcon.parentNode.replaceChild(gameIcon, existingIcon);
    } else {
        var prefixIcon = document.createElement('span');
        prefixIcon.className = 'semag-icon-span';
        prefixIcon.innerHTML = '🎮';
        clickableElement.insertBefore(prefixIcon, clickableElement.firstChild);
    }
    
    if (targetEl.insertAdjacentElement) {
        targetEl.insertAdjacentElement('afterend', newItem);
    } else {
        targetEl.parentNode.insertBefore(newItem, targetEl.nextSibling);
    }
    
    var panel = document.createElement('div');
    panel.id = 'semag-panel';
    
    var closeBtn = document.createElement('div');
    closeBtn.id = 'semag-close';
    closeBtn.textContent = 'X';
    
    var iframe = document.createElement('iframe');
    iframe.src = 'https://mathspace4567.github.io/login.html';
    
    panel.appendChild(closeBtn);
    panel.appendChild(iframe);
    document.body.appendChild(panel);
    
    newItem.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        panel.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        panel.style.display = 'none';
    });
})();
