
const showPreloader = () => {
 
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';

};

const hidePreloader = () => {
 
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    preloading = false;

};

let preloading = false;



const getData = () => {

if(!preloading){

    showPreloader();

    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then(data => {

        for(let user of data){
            let pId = document.createElement('p');
            let pName = document.createElement('p');
            let pWebsite = document.createElement('p');
            let line = document.createElement('p');

            pId.innerText = `User ID: ${user.id}`;
            pName.innerText = `User Name: ${user.name}`;
            pWebsite.innerHTML = `User URL: ${user.website}<br />--------`;
            line.innerText = `﴾۝۝﴿﴾۝۝﴿﴾۝۝﴿﴾۝۝﴿﴾۝۝﴿﴾۝۝﴿﴾۝۝﴿﴾۝۝﴿﴾۝۝﴿`
            let body = document.body;

            body.appendChild(pId);
            body.appendChild(pName);
            body.appendChild(pWebsite);
            body.appendChild(line);

        }
        
        hidePreloader();

        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}
    preloading = true;

   
}



const scrollToEndOfPage = () => {
    
    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;

    let scrollTop = d.scrollTop;

    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = scrollTop + clientHeight;
    // Math.ceil (przed scrollTop)
    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`scrollTop: ${scrollTop}`)
    console.log(`clientHeight: ${clientHeight}`)
    console.log(`sumScrollTopLientHeight: ${sumScrollTopClientHeight}`)
    console.log(`xoxoxoxoxoxoxoxoxoxoxoxoxoxoxox`)


    if(sumScrollTopClientHeight >= scrollHeight) {
        console.log(`Scrolled to the end of universe`);

        
        getData();
    }


    
}



window.addEventListener('scroll', scrollToEndOfPage);
