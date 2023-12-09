javascript:(function(){
      const amount = prompt('Please put in an amount to flood your history by.'); 
      done = false; 
      flooder = window.location.href; 
      for (let i = 1; i <= amount; i++) {
          history.pushState(0, 0, i == amount?flooder:i.toString()); 
          if (i == amount) {
              done = true;
          }
      }
      if (done == true) {
          alert(`🌊 FLDR | History flood successful — "${flooder}" now appears in your history ${amount + (amount == 1 ? ' time.' : ' times.')}`);
      }
})();
