const easyScroll = (targetDiv , duration) => {
    let target = document.querySelector(targetDiv);
    //console.log(target);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    console.log(distance);
    let startTime = null;

    const animation = (currentTime) => {
        if(startTime === null){
            startTime = currentTime;
        }
        let timePassed = currentTime - startTime ; 
        let run = ease(timePassed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timePassed < duration){
            requestAnimationFrame(animation);
        }
    }

    //easing function
    const ease = (t, b, c, d) => {
        t /= d;
        t--;
        return c*(t*t*t*t*t + 1) + b;
    };

    requestAnimationFrame(animation);
}

//List of easing function