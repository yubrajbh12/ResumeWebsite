


// This section works for the button named about/ 
document.getElementById('aboutselection').addEventListener('click',function(){
    const aboutdiscription = document.getElementById('aboutdiscription');
    aboutdiscription.classList.toggle('hidden');
    if(aboutdiscription.classList.contains('hidden')) {
        aboutdiscription.style.display ='block';
        this.textContent="Close";
       
       
    }
    else{
        aboutdiscription.style.display = 'none';
        this.textContent="About";
       
        
    }
})

// This section works for the button named Education/
document.getElementById('eduselection').addEventListener('click', function(){
    const edudiscription = document.getElementById('edudiscription');
    edudiscription.classList.toggle('hidden');
    if(edudiscription.classList.contains('hidden')){
        edudiscription.style.display = 'block';
        this.textContent = "Close";

       

    }
    else{
        edudiscription.style.display = 'none';
        this.textContent = "Education"
        
    }

    
})

// This section works for the button named Work Experience. 

document.getElementById('workselection').addEventListener('click', function(){
    const workdiscription = document.getElementById('workdiscription');
    workdiscription.classList.toggle('hidden');
    if(workdiscription.classList.contains('hidden')){
        workdiscription.style.display = 'block';
        this.textContent = "Close";

       

    }
    else{
        workdiscription.style.display = 'none';
        this.textContent = 'Work Experience';
        
    }

    
})

// This section is for the button named projects /

document.getElementById('pjselection').addEventListener('click', function(){
    const pjdiscription = document.getElementById('pjdiscription');
    pjdiscription.classList.toggle('hidden');
    if(pjdiscription.classList.contains('hidden')){
        pjdiscription.style.display= 'block';
        this.textContent = 'Close';
    }
    else{
        pjdiscription.style.display = 'none';
        this.textContent = 'Projects'
    }
})



















// This section is for the first animation effects when hover it's goona tell you some description.

const desp = document.getElementById('welcome');
const hover = document.getElementById('hover');
   
    desp.addEventListener('mouseover', function(){
        hover.style.display ='block';
        hover.style.fontSize = "20px";
        hover.style.textShadow = "2px 3px 5px pink, 3px 4px 7px skyblue";


    })
        

    
    

    desp.addEventListener('mouseout', function(){
        hover.style.display = 'none';
    }
)

// This section is for the my name which goona show the explaination or in other mean moto when you hover over to my name.

const nam = document.getElementById('heading');
const expa = document.getElementById('explain');
nam.addEventListener('mouseover', function(){
    expa.style.display = 'block';
    expa.style.textAlign = 'center';
    


})
nam.addEventListener('mouseout', function(){
    expa.style.display = 'none';
})

