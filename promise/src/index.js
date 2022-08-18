import {promersaLenta,promersaMedia,promersaRapida} from './js/promesas';
import {buscarPersonaje, buscarPersonajeAsync} from './js/promesas';
import {ObtenerPersonajesArr} from './js/await';
//promersaLenta.then(console.log);
//promersaMedia.then(console.log);
//promersaRapida.then(console.log);


//Promise.race([promersaLenta,promersaMedia,promersaRapida])
//    .then(mensaje=> console.log(mensaje))
//    .catch(err=> console.log(err));

//promesa normal
//buscarPersonaje('itachi').then(personaje=> console.log(personaje))
//                .catch(console.warn);


////promesa usando async
//buscarPersonajeAsync('naruto').then(personaje=> console.log(personaje))
//                .catch(console.warn);


ObtenerPersonajesArr().then(console.table);

