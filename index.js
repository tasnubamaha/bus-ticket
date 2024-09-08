document.getElementById('seeAllOffersBtn').addEventListener('click', function() {
    const moreOffers = document.getElementById('moreOffers');
    if (moreOffers.classList.contains('hidden')) {
        moreOffers.classList.remove('hidden');
        this.textContent = "Hide Offers";
    } else {
        moreOffers.classList.add('hidden');
        this.textContent = "See All Offers";
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const nextBtn = document.querySelector('.next-btn');
    const seatSummaryTable = document.querySelector('.seat-summary');
    const priceSummary = document.querySelector('.price-summary');
    const passengerNameInput = document.getElementById('passenger-name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const couponInput = document.getElementById('coupon');
    const selectedSeats = [];

    // Function to handle seat selection
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                const index = selectedSeats.indexOf(seat.textContent);
                if (index > -1) {
                    selectedSeats.splice(index, 1);
                }
            } else {
                seat.classList.add('selected');
                selectedSeats.push(seat.textContent);
            }
            updateSeatSummary();
        });
    });

    // Function to update seat summary
    function updateSeatSummary() {
        seatSummaryTable.innerHTML = `
            <tr>
                <th>Seat</th>
                <th>Class</th>
                <th>Price</th>
            </tr>
        `;

        let totalPrice = 0;

        selectedSeats.forEach(seat => {
            seatSummaryTable.innerHTML += `
                <tr>
                    <td>${seat}</td>
                    <td>Economy</td>
                    <td>550</td>
                </tr>
            `;
            totalPrice += 550;
        });

        priceSummary.innerHTML = `
            <p>Total Price: <strong>BDT ${totalPrice}</strong></p>
        `;
    }

    // Function to handle the confirmation of the ticket
    nextBtn.addEventListener('click', () => {
        // Log values for debugging
        console.log('Passenger Name:', passengerNameInput.value.trim());
        console.log('Phone:', phoneInput.value.trim());

        // Check if either field is empty
        if (!passengerNameInput.value.trim() || !phoneInput.value.trim()) {
            alert('Please fill out all required fields.');
            return;
        }

        // Process the form if all required fields are filled
        const passengerName = passengerNameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
        const couponCode = couponInput.value.trim();

        alert(`Ticket confirmed for ${passengerName}.\nPhone: ${phone}\nEmail: ${email}\nCoupon Code: ${couponCode}\nSeats: ${selectedSeats.join(', ')}`);

        // Reset form
        seats.forEach(seat => seat.classList.remove('selected'));
        selectedSeats.length = 0;
        updateSeatSummary();
        passengerNameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        couponInput.value = '';
    });
});








