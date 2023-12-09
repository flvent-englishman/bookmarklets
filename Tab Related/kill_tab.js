javascript:(function(){
        const verify = confirm('Are you sure to want to kill this tab?');
        if (verify == true) {
            document.body.remove();
        }
})();
