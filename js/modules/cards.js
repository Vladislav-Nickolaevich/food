import {getResource} from '../services/services';

function cards(){
    // Используем классы для карточек

    class MenuCard{
        constructor( img, alt, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; 
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1.5;
            this.Change();
        }
        Change(){
            this.price = this.price * this.transfer;
        }
        render(){
            const elem = document.createElement('div');
            
                if(this.classes.length === 0){
                    // this.classes = elem.classList.add('menu__item');
                    elem.classList.add('menu__item');
                } else{
                    this.classes.forEach(className => elem.classList.add(className));
                }
            
            elem.innerHTML = `   
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
             `;      
            this.parent.append(elem); 
        }
    }
    
 
    
    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, alt, title, descr, price}) => {
                new MenuCard(img, alt, title, descr, price, '.menu .container').render();
            });
    });
}

export default cards;