function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass ){

    // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent(){
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
    }


    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if(target && target.classList.contains(tabsSelector.slice(1))){
        tabs.forEach((item, i) => {
            if(target == item){
                hideTabContent();
                showTabContent(i);
            }
            
        });
        }
    });
}

export default tabs;