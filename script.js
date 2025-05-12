let headings = document.querySelectorAll(".heading");
let convertHeading = Array.from(headings);

let colors = ["red", "blue", "green", "orange", "purple", "teal", "maroon", "brown", "pink", "gold"];
let colour = 0;

convertHeading.map(item => {
    let count = 0;

    function counterJs() {
        count++;
        item.innerHTML = count;

        // Set color
        item.style.color = colors[colour];
        
        // Increment and reset color index if needed
        colour++;
        if (colour >= colors.length) {
            colour = 0;
        }

        //Stop the counter
        if (count == item.dataset.number) {
            clearInterval(stop);
        }
    }

    let stop = setInterval(() => {
        counterJs();
    }, item.dataset.speed);
});
