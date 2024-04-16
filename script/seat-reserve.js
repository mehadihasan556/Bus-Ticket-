
let selectedSeats = [];


function createSeatMap() {
    const seatMap = document.getElementById('seatMap');
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const numCols = 4;
    const numSeatsPerRow = 4;

    for (let row of rows) {
        for (let i = 1; i <= numSeatsPerRow; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.innerText = row + i;
            seat.addEventListener('click', () => {
              
                seat.classList.toggle('selected');

               
                if (seat.classList.contains('selected')) {
                    selectedSeats.push(seat.innerText);
                } else {
                    selectedSeats = selectedSeats.filter(seatNum => seatNum !== seat.innerText);
                }
            });
            seatMap.appendChild(seat);
        }
    }
}

function bookSeats() {
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
    } else {
        const confirmationMessage = `You have booked seats: ${selectedSeats.join(', ')}`;
        alert(confirmationMessage);
        
        selectedSeats = [];
        
        const seats = document.querySelectorAll('.seat');
        seats.forEach(seat => {
            seat.classList.remove('selected');
        });
    }
}


document.addEventListener('DOMContentLoaded', createSeatMap);



