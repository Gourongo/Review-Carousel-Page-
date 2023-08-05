const reviews = [
    {
        id: 1,
        name: "SUSAN SMITH",
        job: "WEB DEVELOPER",
        img: "/carousel.image/review 1.jpeg",
        Text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus illo ratione rem iusto, libero unde ducimus nesciunt corporis. Eum, explicabo exercitationem aspernatur asperiores labore quo rerum illo voluptatum vitae.",
    },
    {
        id: 2,
        name: "JARA MAC",
        job: "UX DESIGNER",
        img: "/carousel.image/review 2.jpg",
        Text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus illo ratione rem iusto, libero unde ducimus nesciunt corporis. Eum, explicabo exercitationem aspernatur asperiores labore quo rerum illo voluptatum vitae.",
    },
    {
        id: 3,
        name: "PARLE MEHERA",
        job: "GRAPHIC DESIGNER",
        img: "/carousel.image/review 3.jpeg",
        Text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus illo ratione rem iusto, libero unde ducimus nesciunt corporis. Eum, explicabo exercitationem aspernatur asperiores labore quo rerum illo voluptatum vitae.",
    },
    {
        id: 4,
        name: "SARA JONSON",
        job: "APP DEVELOPER",
        img: "/carousel.image/review 4.jpeg",
        Text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus illo ratione rem iusto, libero unde ducimus nesciunt corporis. Eum, explicabo exercitationem aspernatur asperiores labore quo rerum illo voluptatum vitae.",
    },
    {
        id: 5,
        name: "NENA SENJARA",
        job: "DIGITAL MARKETER",
        img: "/carousel.image/review 5.jpg",
        Text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus illo ratione rem iusto, libero unde ducimus nesciunt corporis. Eum, explicabo exercitationem aspernatur asperiores labore quo rerum illo voluptatum vitae.",
    },
];
console.log(reviews);

const img = document.getElementById("person-img");
const Author = document.getElementById("Author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev = document.querySelector(".prev-Btn");
const next = document.querySelector(".next-Btn");
const random = document.querySelector(".random-Btn");

// set starting item

let currentItem = 0;

// show initial item
window.addEventListener("DOMContentLoaded", function (){
    showPerson(currentItem)
});

// show person based on item

function showPerson(currentItem){
    const item = reviews [currentItem];
    img.src = item.img;
    Author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.Text;
};

// show next person

next.addEventListener("click", function() {
    currentItem ++;
    // console.log(currentItem);
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem)
});

// shoe prev person

prev.addEventListener("click", function() {
    currentItem --;
    // console.log(currentItem);
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem)
});

// show random person

random.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    // console.log(currentItem);
    showPerson(currentItem)
});