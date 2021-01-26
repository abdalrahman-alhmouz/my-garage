'use strict'

var form=document.getElementById('form')
var table =document.getElementById('table')
var pic =document.getElementById('img')

var array =[];


function Oreder(name,category,year) {
this.name=name;
this.category=['bmw.png','chevrolet.png','hyundai.png','kia.png','lexus.png','tesla.png','toyota.png'];
this.year=year;


array.push(this);

    
}

Oreder.prototype.creatBody=function(){
    // var img=['bmw.png','chevrolet.png','hyundai.png','kia.png','lexus.png','tesla.png','toyota.png']
var rowOne = document.createElement('tr');

var thOne = document.createElement('td');
thOne.textContent='car name :  ' + this.name;
rowOne.appendChild(thOne)

var thYear = document.createElement('td');
thYear.textContent='  model year:' + this.year;
rowOne.appendChild(thYear)



// for (let index = 0; index < this.category.length; index++) {
// pic.setAttribute('src',this.category[index] )

// var thImg = document.createElement('td');
// thImg.textContent='model year:' + this.category[index];
// rowOne.appendChild(thImg)


    
// }
table.appendChild(rowOne)


}






function addClik(event) {
event.preventDefault();

var name=event.target.name.value;
var select=event.target.select.value;
var year=event.target.year.value;
var newOrder =new Oreder(name,select,year)
newOrder.creatBody();
localStorage.setItem('array',JSON.stringify(array))
    
}

function restorStorage() {

    var rowOne = document.createElement('tr');
for (let index = 0; index < array.length; index++) {
    
var thOne = document.createElement('td');
thOne.textContent='car name :' + array[index].name;
rowOne.appendChild(thOne)

var thYear = document.createElement('td');
thYear.textContent='model year:' + array[index].year;
rowOne.appendChild(thYear)

}
table.appendChild(rowOne)
    
}

function checkList() {
    if(localStorage.getItem('array')){

        array=JSON.parse(localStorage.getItem('array'))
    }
    restorStorage()
    
}



form.addEventListener('submit',addClik);
checkList()

