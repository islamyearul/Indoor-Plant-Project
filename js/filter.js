
var sortBtn = document.querySelector('.filter-menu').children;
var sortItem = document.querySelector('.filter-item').children;

for(var i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(var j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        var targetData = this.getAttribute('data-target');

        for(var k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}