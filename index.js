const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Muchas gracias por todo lo maravilloso que me has dado, quiero serguir correspondiendote a todo lo maravilloso que me siento a tu lado, todo lo lindo que me haces sentir en todo mi cuerpo cuando pienso en ti')
    alert('Quiero que si aceptas porfavorpermanecer juntos y luchar juntos')
    location.href = 'https://www.youtube.com/watch?v=DNmueHrg5PA=20s';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})