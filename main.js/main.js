let listElements = document.querySelectorAll('.list__button--click');  
//funcion que perimite desplegar elemetos 

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{//funcion elemnetos>escuchador de evento >cuando le den click
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;//hermano adyacente ul list show
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});