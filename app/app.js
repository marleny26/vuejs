var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Esta es mi primera vez en Vue',
        see: true,
        discotecas: [
            { 
                nombre: 'Downtown',
                imagen: 'app/imagenes/Downtown.jpeg', 
                descripcion: 'Club de baile ',
                ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.831290947902!2d-77.03331192404953!3d-12.123693193339617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c818d803cdc5%3A0x20c6f1dce58527c0!2sDowntown!5e0!3m2!1ses!2spe!4v1717031675000!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            { 
                nombre: 'Antiqua Disco Club',
                imagen: 'app/imagenes/AntiquaDiscoClub.jpg', 
                descripcion: 'Descripción ',
                ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.463534277295!2d-77.02732112404902!3d-12.148813243810988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7ec52ab855f%3A0x2b176db45a448496!2sAntiqua%20Disco%20Club!5e0!3m2!1ses!2spe!4v1717031634840!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            { 
                nombre: 'Discoteca Hydra',
                imagen: 'app/imagenes/hydra.jpg', 
                descripcion: 'Descripción',
                ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15602.811987582736!2d-77.04279982779381!3d-12.132462287601147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9dcaef4f919%3A0x8d6ef16d8039a6f0!2sDiscoteca%20Hydra!5e0!3m2!1ses!2spe!4v1717031301890!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            { 
                nombre: 'Downtown',
                imagen: 'app/imagenes/Downtown.jpeg', 
                descripcion: 'Club de baile ',
                ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.831290947902!2d-77.03331192404953!3d-12.123693193339617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c818d803cdc5%3A0x20c6f1dce58527c0!2sDowntown!5e0!3m2!1ses!2spe!4v1717031675000!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            { 
                nombre: 'Antiqua Disco Club',
                imagen: 'app/imagenes/AntiquaDiscoClub.jpg', 
                descripcion: 'Descripción ',
                ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.463534277295!2d-77.02732112404902!3d-12.148813243810988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7ec52ab855f%3A0x2b176db45a448496!2sAntiqua%20Disco%20Club!5e0!3m2!1ses!2spe!4v1717031634840!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            { 
                nombre: 'Discoteca Hydra',
                imagen: 'app/imagenes/hydra.jpg', 
                descripcion: 'Descripción',
                ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15602.811987582736!2d-77.04279982779381!3d-12.132462287601147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9dcaef4f919%3A0x8d6ef16d8039a6f0!2sDiscoteca%20Hydra!5e0!3m2!1ses!2spe!4v1717031301890!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
           
        ]
    }
});
