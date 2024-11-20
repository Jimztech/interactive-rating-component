const submitBtn = document.getElementById("submit");
const main = document.getElementById("main");

function newContent() {
    main.innerHTML = `
        <div class="image-container">
            <img 
                src="/images/illustration-thank-you.svg"
                alt="thank you image"
                class="thank-you"
            />
        </div>
        <div class="rate-info-container">
            <span class="rate-info">You selected</span>
        </div>
        <h1 class="second-header">Thank you!</h1>
        <p class="p-tag">
            We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate 
            to get in touch!
        </p>
    `
}

submitBtn.addEventListener('click', newContent);