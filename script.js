document.querySelector('.cross').style.display='none';
document.querySelector('.ham').addEventListener("click", ()=>{
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
    if( document.querySelector('.slidebar').classList.contains('slidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'
        },300)
    }
})
    document.querySelector('.cross').addEventListener("click", () => {
        document.querySelector('.slidebar').classList.toggle('slidebarGo');
        if (document.querySelector('.slidebar').classList.contains('slidebarGo')) {
            document.querySelector('.ham').style.display = 'inline';
            document.querySelector('.cross').style.display = 'none';
        } else {
            document.querySelector('.ham').style.display = 'none';
            setTimeout(() => {
                document.querySelector('.cross').style.display = 'inline';
            }, 300);
        }
    });

