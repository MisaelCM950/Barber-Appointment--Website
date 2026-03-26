const sendBtn = document.querySelector('.sendButton');
const bottomSection = document.querySelector('.bottom');
const middleSection = document.querySelector('.middle');
const successMsg = document.getElementById('successMessage');

let selectedTime = "";
const timeButtons = document.querySelectorAll('.time');
timeButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        timeButtons.forEach(btn => btn.style.backgroundColor = 'white');
        button.style.backgroundColor = "#ffd900"
        selectedTime = button.innerText;
        console.log("Time selected:", selectedTime);
    });
});

//WhatsApp link
sendBtn.addEventListener('click', () =>{
    // Get the name
    const name = document.getElementById('user-name').value;
    //Get the date
    const date = document.getElementById('date').value;
    const phoneNumber = '526142249795'

    if(!name || !date || !selectedTime ){
        alert('Por favor rellena todos los campo');
        return;
    }
    const message = `Hola! Soy ${name}. Me gustaría agendar una cita para el día ${date} a las ${selectedTime}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank')
})


// Get the time




sendBtn.addEventListener('click', ()=>{
    bottomSection.style.display = 'none';
    middleSection.style.display = 'none';
    successMsg.style.display = 'block';
});