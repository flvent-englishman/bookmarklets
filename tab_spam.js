    javascript:(function(){
        const verify = confirm('Are you sure you want to spam tabs?');
        if (verify == true) {
            const website = prompt('What website do you want to spam? Input "n" for a term instead.');
            if (website == 'n') {
                const term = prompt('What term do you want to spam?');
                website = `https://www.google.com/search?q=${term}`;
            } else {
                website = website.startsWith('http') ? website : 'https://' + website;
            }
            while (true) {
                window.open(website);
            }
        }
    })();
