javascript:(function(){
            document.title = '⠀';
            let icon = document.querySelector('link[rel~="icon"]');
            if (!icon) {
                icon = document.createElement('link');
                icon.rel = 'icon';
                document.head.appendChild(icon);
            }
            icon.href = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1024px-HD_transparent_picture.png';

})();
