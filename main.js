$(document).ready(function(){
    $('#more').on('click', function(){
        if ($('.read-more').is(':hidden')) {
            $('.read-more').slideDown();
            $('#more').html(
                `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M11.293 8.293a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414L12 10.414l-4.95 4.95a1 1 0 0 1-1.414-1.414z"/></g></svg>
               See less
                `
            );
        } else {
            $('.read-more').slideUp();
            $('#more').html(
                `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"/></g></svg>
                See more
                `
            )
        }
    });
});


// 
let aboutMe = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('aboutMe-visible')
    }
},
{threshold:0.5}
)
aboutMe.observe(document.querySelector('.aboutMe'))

let mySkills = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('mySkills-visible')
    }
},
{threshold:0.5}
)
mySkills.observe(document.querySelector('.mySkills'))

let myCapstone = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('myCapstone-visible')
    }
},
{threshold:0.5}
)
myCapstone.observe(document.querySelector('.myCapstone'))

let myEducation = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('myEducation-visible')
    }
},
{threshold:0.5}
)
myEducation.observe(document.querySelector('.myEducation'))

let educ1 = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('educ1-visible')
    }
},
{threshold:0.5}
)
educ1.observe(document.querySelector('.educ1'))

let educ2 = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('educ2-visible')
    }
},
{threshold:0.5}
)
educ2.observe(document.querySelector('.educ2'))

let mycontacts = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('mycontacts-visible')
    }
},
{threshold:0.5}
)
mycontacts.observe(document.querySelector('.mycontacts'))
