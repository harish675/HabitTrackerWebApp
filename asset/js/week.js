





const doneBtns = document.querySelectorAll('.done-btn');
doneBtns.forEach(function(doneBtn){ 

           const dataValue = doneBtn.getAttribute('data-value');
           const icon = doneBtn.querySelector('i');   
           if(dataValue === 'true'){
                 icon.style.color = 'green';
           };
});

const notDoneBtns = document.querySelectorAll('.not-done-btn');
notDoneBtns.forEach(function(notDoneBtn){ 

           const dataValue = notDoneBtn.getAttribute('data-value');
           const icon = notDoneBtn.querySelector('i');  
           
           if(dataValue === 'false'){
                 icon.style.color = 'red';
           };
});


const skipBtns = document.querySelectorAll('.skip-btn');
skipBtns.forEach(function(skipBtn){ 

           const dataValue = skipBtn.getAttribute('data-value');
           console.log('data-value,',dataValue);
           const icon = skipBtn.querySelector('i');  
           
           if(dataValue === 'true'){
                 icon.style.color = 'gray';
           }
          else if(dataValue === 'false'){
                icon.style.color = 'gray';
           }

           else{
              icon.style.color = 'orange';
           }

});


// for setting up the background colors for div
const infoDate = document.querySelectorAll('.info');
infoDate.forEach(function(info){
        
       const dataValue = info.getAttribute('data-value');

       if(dataValue === 'true'){
             
            info.style.backgroundColor = 'green';
       }

       else if(dataValue === 'false'){
             
            info.style.backgroundColor = 'red';
       }

       else{
             
            info.style.backgroundColor = 'orange';  
       }
       
});