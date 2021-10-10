// to see outpu by adding 'dblclick' function
// add this app.js file to html

//selectors
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

// loveMe.addEventListener('dblclick', (e) => {
    
// })

//this is functionfor double click but we will create it manually

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('dblclick', (e) => {
   

    const heart = document.createElement('i')
    //here we create element i
    // that is of font
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    // then we added fas and fa-heart classes to it
    //to create heart shape (of font awesome)
    //i.e <i class="fas fa-heart"></i>
    const x = e.clientX
    const y = e.clientY
    // here we calculate co-ordinates of x & y axis of full page
    
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    // to measure img's position i.e iffset position we use target.offsetleft fn

    const xInside = x - leftOffset
    const yInside = y - topOffset

    // console.log(xInside, yInside);
    // we  subctract img's co-ordinates from full page's co-ordinate 
    // to get exact click loacation of image

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    //we used position absolute for .loveme .fa-heart in css
    // so to define location of heart icon we use style.top property here
    
    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked
    
})

