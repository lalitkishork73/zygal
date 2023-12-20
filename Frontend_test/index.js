const container = document.getElementById("container");
const btn = document.getElementById("onclick");
const input = document.getElementById("input");

btn.addEventListener("click", (e) => {
    addBlock(input.value);
});


window.addEventListener('resize', () => {
    addBlock(input.value);
});

function addBlock(numberOfDivs) {
    container.innerHTML = "";

    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;

    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement("div");
        div.className = "box black";

        const marginTop = i * (containerHeight / numberOfDivs);
        const height = containerHeight / numberOfDivs;
        const width = containerWidth / numberOfDivs;

        div.style.marginTop = `${marginTop}px`;
        div.style.height = `${height}px`;
        div.style.width = `${width}px`;

        container.appendChild(div);
    }
}
