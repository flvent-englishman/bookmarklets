javascript:(function(){
    let site = prompt('Please put in a link to embed into an about:blank page, leave blank to search.');
    if (site == '') {
        site = 'https://www.google.com/';
    }
    if (site != null) {
        const page = window.open('about:blank');  
        page.document.write(`<iframe src='${site}' style='width:100%;height:100%;border:none'></iframe>`);
    }
})();
