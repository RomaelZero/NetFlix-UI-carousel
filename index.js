const leftBtn = document.querySelector(".prev-btn");
const rightBtn = document.querySelector(".next-btn");
const imagesContainer = document.querySelector('.images');

const videoURLs = [
    "https://firebasestorage.googleapis.com/v0/b/video-carousel-d5a09.appspot.com/o/video1.mp4?alt=media&token=26325442-ee99-4615-bcb7-5fde0c6ae697",
    "https://firebasestorage.googleapis.com/v0/b/video-carousel-d5a09.appspot.com/o/video2.mp4?alt=media&token=feb492b6-226c-4b98-b9e2-b9a0b4cf58df",
    "https://firebasestorage.googleapis.com/v0/b/video-carousel-d5a09.appspot.com/o/video3.mp4?alt=media&token=e341c09e-2d95-45c0-bc41-1d0a18e4d62d",
    "https://firebasestorage.googleapis.com/v0/b/video-carousel-d5a09.appspot.com/o/video4.mp4?alt=media&token=a1087057-ccc2-4c4d-a459-c9bf5e9dbec7"
]

// Store the initial translate value
let translateValue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--translate-value'));

leftBtn.addEventListener("click", () => {
    console.log("left button clicked");    

    // Subtract 75% from the stored translate value
    translateValue -= 75;
    console.log(translateValue);
    // Check the translate value
    checkTranslateX(translateValue);
    // Update the transform property of the .images container
    imagesContainer.style.transform = `translateX(${translateValue}%)`;
    
});

rightBtn.addEventListener("click", () => {
    console.log("right button clicked");

    // Add 75% from the stored translate value
    translateValue += 75;
    console.log(translateValue);
    // Check the translate value
    checkTranslateX(translateValue);
    // Update the transform property of the .images container
    imagesContainer.style.transform = `translateX(${translateValue}%)`;
});



function checkTranslateX(value){
    console.log("Checking ....");
    if(value > 70){
        console.log("greater than 70");
        translateValue = -80;
        return;
    } else if (value < -80) {
        console.log("less than -80");
        translateValue = 70;       
        return;
    }
}


// Enlarging the image


// Select all images inside the images container
const images = imagesContainer.querySelectorAll('img');
let setVisibility = false;

// Add event listeners to each image
images.forEach(image => {
    // Add transition to the image for a smooth size change
    image.style.transition = 'width 0.3s ease'; // Adjust the duration and easing as needed
    
    image.addEventListener('mouseenter', () => {
        // Increase the size of the hovered image
        
        image.style.width = '50%';
        leftBtn.style.visibility = "hidden";
        rightBtn.style.visibility = "hidden";        
    });
    
    image.addEventListener('mouseleave', () => {
        // Restore the original size of the image when mouse leaves
        image.style.width = ''; // Reset to default size
        leftBtn.style.visibility = "visible";
        rightBtn.style.visibility = "visible";        
    });

    image.addEventListener("click",(event)=>{
        const id = parseInt(event.target.getAttribute("data-id"));
        setVisibility = true;
        addVideo(id);
    });
});



// Adding video
const videoContainer = document.querySelector(".video");
const darkBackGroundDiv = document.querySelector(".darkbackground");
let colorBlack =false;


function addVideo(id){
    console.log("The id of the video about to play is "+ id);
    console.log(typeof(id));
    //darkbackground div colors
    darkBackGroundDiv.style.pointerEvents = "auto";
    darkBackGroundDiv.style.transition = "500ms";
    darkBackGroundDiv.style.opacity = 1;
    colorBlack = true;

    // Show the video container
    videoContainer.style.visibility = "visible";
    
    if (id === 1 || id === 5) {
        console.log(videoURLs[0]);
        videoContainer.innerHTML = `
            <video controls loop autoplay style="width: 100%; height: 100%;">
                <source src=${videoURLs[0]}>
            </video>
        `;
    } else if (id === 2 || id === 6) {
        console.log(videoURLs[1]);
        videoContainer.innerHTML = `
            <video controls loop autoplay style="width: 100%; height: 100%;">
                <source src=${videoURLs[1]}>
            </video>
        `;
    } else if (id === 3 || id === 7) {
        console.log(videoURLs[2]);
        videoContainer.innerHTML = `
            <video controls loop autoplay style="width: 100%; height: 100%;">
                <source src=${videoURLs[2]}>
            </video>
        `;
    } else if (id === 4 || id === 8) {
        console.log(videoURLs[3]);
        videoContainer.innerHTML = `
            <video controls loop autoplay style="width: 100%; height: 100%;">
                <source src=${videoURLs[3]}>
            </video>
        `;
    } else {
        console.log(id);
        console.log(videoURLs[0]);
        videoContainer.innerHTML = `
            <video controls loop autoplay style="width: 100%; height: 100%;">
                <source src="${videoURLs[0]}">
            </video>
        `;
    }

    
    videoContainer.style.transition = "1000ms ease";
    videoContainer.style.opacity = 1;
    videoContainer.style.transform = "translate(-50%,-50%)"; 

    
}


darkBackGroundDiv.addEventListener("click",()=>{
    console.log("The div has been clicked");
    if(colorBlack){
        colorBlack =false;


        // Making darkBackGround div not visible once again
        darkBackGroundDiv.style.pointerEvents = "none";
        darkBackGroundDiv.style.transition = "500ms";
        darkBackGroundDiv.style.opacity = 0;
    }

});

videoContainer.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("The button was clicked");
})