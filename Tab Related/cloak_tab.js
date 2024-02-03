javascript:(function(){
        const title = prompt('Please put in the name you want to rename your tab to.');
        if (title != null && title != '') {
            document.title = title;
        }
        const favicon = prompt('Please put in an image link to change the favicon to.');
        if (favicon != null && favicon != '') {
            let icon = document.querySelector('link[rel~="icon"]');
            if (!icon) {
                icon = document.createElement('link');
                icon.rel = 'icon';
                document.head.appendChild(icon);
            }
            icon.href = favicon;
        }
    })();
