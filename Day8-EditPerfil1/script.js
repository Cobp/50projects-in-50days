const defaultFile = 'https://th.bing.com/th/id/R.b74966e366046deda383b0bcfd6e27f7?rik=rQPCKso0YaHEBA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_124200.png&ehk=AK9Eu0tjJY9LafYduYtAv7mmZTQK31ltfqBg0vFy8cw%3d&risl=&pid=ImgRaw&r=0'
const file = document.getElementById('foto')
const img = document.getElementById('img')
file.addEventListener( 'change', e =>{
    if(e.target.files[0]){
        const reader = new FileReader( );
        reader.onload = function(e){
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    }else{
        img.src = defaultFile;
    }
})