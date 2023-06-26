const qoute = [
    {
text : "quia repellat recusandae iure? Suscipit sapiente possimus assumenda iste veritatis, debitis error soluta veniam, similique rerum facilis consequuntur labore eveniet illum alias, quaerat eos eius totam.",

        
    },
    {
text : "aperiam? Magni obcaecati quisquam deserunt. Error rem soluta culpa, ipsam obcaecati numquam expedita odit fugit placeat pariatur quam fuga eaque sunt sit asperiores omnis ",

        
    },
    {
text : " a dolore obcaecati sunt! Ut perspiciatis repellendus, voluptatum fugit nisi veniam officia vero unde laborum. Est, minima quibusdam.",

        
    },
    {
text : "deserunt perferendis laborum voluptate maxime enim laudantium animi, voluptatum, nihil veritatis quisquam unde! Dolorem facere quisquam sapiente, repellat vel ",

        
    },
    {
text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente illo doloribus nesciunt, aperiam ",

        
    },

]

let count = 0;
const text = document.querySelector(".text")
text.innerText = qoute[0].text;
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    count += 1;
    if (count >= qoute.length-1) {
        count = 0;
    }
    
    text.innerHTML = `${qoute[count].text}`

})