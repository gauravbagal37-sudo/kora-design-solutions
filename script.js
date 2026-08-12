const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(update,20);

        }else{

            counter.innerText = target;

        }

    };

    update();

});
