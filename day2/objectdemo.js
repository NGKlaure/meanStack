//{} -->object

//myemp = {id:101,name:'admin',city:'mycity'}
//document.write(myemp.id +" " +myemp.city)
/*var myemp =new Object();
myemp.id= 101;
myemp.name="nadine";
myemp.city ="philly";
document.write(myemp.id+  "<br> "+myemp.name+ " "+ myemp.city)*/
//document.write(myemp.id+  " "+myemp.name+ " "+ myemp.city)
//document.write(`${myemp.id}<br> ${myemp.name}<br> ${myemp.city}`)
//document.write(`${myemp.id} ${myemp.name} ${myemp.city}`)

function myemp(id,name, email,city,salary){
    this.id=id;
    this.name=name;
    this.email=email;
    this.city=city;
    this.salary=salary;
    this.changeSalary= changeSalary;
    function changeSalary(input){
        this.salary=input
    }   
} 

emp=new myemp(101,'admin','nadine@gmail','pune',100)
function view(){
    emp.name = document.getElementById('name').value
    emp.email = document.getElementById('email').value
    emp.city = document.getElementById('city').value
    emp.salary = document.getElementById('number').value
    //emp=new myemp(101,emp.name,emp.email ,emp.city,emp.salary)
    document.getElementById('result').innerHTML =`name:  ${emp.name}<br>  email: ${emp.email}<br>  city: ${emp.city}<br>  salary: ${emp.salary}`
}
//emp.changeSalary(1234)
//document.getElementById('result').innerHTML =` ${emp.id} ${emp.name} ${emp.email} ${emp.city} ${emp.salary}`
//document.write(`${emp.id} ${emp.name} ${emp.city} ${emp.salary}`)

function salChange(){
    emp.changeSalary(document.getElementById('salary').value)
    //document.getElementById('result').innerHTML =` ${emp.id} ${emp.name} ${emp.city} ${emp.salary}`
    document.getElementById('result').innerHTML =`name:  ${emp.name}<br>  email: ${emp.email}<br>  city: ${emp.city}<br>  salary: ${emp.salary}`
}