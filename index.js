const submitBtn = document.getElementById("submit");
const main = document.getElementById("main");
const rateButtons = document.querySelectorAll(".rate-buttons");

let selectedRating = null;

rateButtons.forEach(button => {
    button.addEventListener("click", function () {
        rateButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');

        selectedRating = this.textContent;
    })
});



function newContent(event) {
    event.preventDefault();

    if(!selectedRating) {
        alert("Please select a rating before submitting!");
        return;
    }

    main.innerHTML = `
        <div class="image-container">
            <img 
                src="/images/illustration-thank-you.svg"
                alt="thank you image"
                class="thank-you"
            />
        </div>
        <div class="rate-info-container">
            <span class="rate-info">You selected ${selectedRating} out of 5</span>
        </div>
        <h1 class="second-header">Thank you!</h1>
        <p class="p-tag">
            We appreciate you taking the time to give a <br>rating.
            If you ever need more support, don't <br>hesitate 
            to get in touch!
        </p>
    `
}

submitBtn.addEventListener('click', newContent);
