const btn = document.getElementById('chgBtn');
const copyBtn = document.getElementById('copyBtn');

btn.addEventListener("click", () => {
    let col = "#";
    for (let i = 0; i < 6; i++) {
        col += Math.floor(Math.random() * 16).toString(16);
    }
    document.body.style.backgroundColor = col;
    btn.innerText = col;
    btn.style.color = col;
});

copyBtn.addEventListener("click", () => {
    const color = btn.innerText;
    navigator.clipboard.writeText(color).then(() => {
        alert(`Copied the color: ${color}`);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
    // btn.addEventListener("click", () => {
    //     let r = Math.floor(Math.random() * 256)
    //     let g = Math.floor(Math.random() * 256)
    //     let b = Math.floor(Math.random() * 256)
    //     let color = document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    //     btn.innerText = color;
    //     btn.style.color = color;
    // });
