document.getElementById('login').addEventListener('click',function(){
    message=document.getElementById('yourID');
    id=document.getElementById('id').value;
    if(id.length<=5 && id.length>=9){
        message.innerHTML='Incorrect ID';
    }
    else{
    message.style.color='purple';
    message.innerHTML= id;
    }

    message=document.getElementById('yourname');
    name=document.getElementById('name').value;
    message.style.color='purple';
    message.innerHTML= name;



function marks(){

    calcul=(Number(prompt("Enter your Calculus marks")));
    calctext=document.querySelector('#calculus');
    calctext.innerHTML=calcul;

    comp=(Number(prompt("Enter your Computer Fundamental marks")));
    comptext=document.querySelector('#computer');
    comptext.innerHTML=comp;

    engl=(Number(prompt("Enter your English marks")));
    engltext=document.querySelector('#english');
    engltext.innerHTML=engl;

    bee=(Number(prompt("Enter your Electrical marks")));
    beetext=document.querySelector('#electrical');
    beetext.innerHTML=bee;

    
    es=(Number(prompt("Enter your Electronics marks")));
    estext=document.querySelector('#electronics');
    estext.innerHTML=es;
    
    message=document.getElementById('grade1');
    if(calcul<50){
        message.style.color= 'red';
        message.innerHTML="FAIL";}
    else{
    message.innerHTML="PASS";}


    message=document.getElementById('grade2');
    if(comp<50){
    message.style.color= 'red';
    message.innerHTML="FAIL";}
    else
    message.innerHTML="PASS";

    message=document.getElementById('grade3');
    if(engl<50){
    message.style.color= 'red';
    message.innerHTML="FAIL";}
    else
    message.innerHTML="PASS";

    message=document.getElementById('grade4');
    if(bee<50){
    message.style.color= 'red';
    message.innerHTML="FAIL";}
    else
    message.innerHTML="PASS";

    message=document.getElementById('grade5');
    if(es<50){
    message.style.color= 'red';
    message.innerHTML="FAIL";}
    else
    message.innerHTML="PASS";
}

marks();
})