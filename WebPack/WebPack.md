## Node

correr codigo de javascript en el servidor.

Pero tambien nuestra computadora puede ser un servidor de desarrollo, nos permite desarrollar localmente..

## WebPack

Es un empaquetador de modulos. Realizar trabajos de manera automatica.

Gestionar dependencias.

montar servidores de desarrollo y pruebas.

convertir a diferentes formatos.

compilacion de sass a css.

Nos permite trabajar con js moderno.

compilar ts y js.


Se utiliza para definir comandos o paquetes que se utilizaran en el proyecto para su buen funcionamiento.

una  herramienta Open Source utilizada por los desarrolladores para empaquetar y exportar todos los ficheros necesarios para que un proyecto funcione con todas sus dependencias frontend .


### desventajas de webpack

la configuracion inicial puede ser un dolor de cabeza.

complicado al detectar problemas con algun paquete.

### Inicio de packge.json


e coloca toda la **información** que se conoce sobre el mismo. Este archivo es un simple fichero de texto, en formato JSON que incorpora a través de varios campos información muy variada.

Este fichero tiene una estructura definida muy concreta, y a través de sus campos se puede guardar y recuperar información muy útil.

```
npm init
```




### instalacion de webpack:

instalacion de webpack en el proyecto. 

https://webpack.js.org/guides/getting-started/

El paquete *webpack* corresponde con el propio Webpack, mientras que el paquete *webpack-cli* contiene  los comandos necesarios para realizar las operaciones con Webpack, lo que se conoce como Interfaz de línea de comandos o CLI por su acrónimo en inglés.

```
npm install webpack webpack-cli --save-dev
```

Uso de este comando para realizar la carpeta de distribucion. 

```
npm run build
```

### Instalacion de plugins:


* `url-loader`
* `file-loader`: es de gran ayuda para utilizar binarios dentro de nuestra app con `import`
* `html-loader`: ayuda a minificar el html si es necesario
* `css-loader`: interpreta los estilos de la app
* `babel-loader`: aunque webpack entiende JS, este loader ayuda a transformar el código con una sintaxis moderna a una sintaxis más universal para todos los navegadores
* `style-loader`: mientras que css-loader interpreta estilos, style-loader se encarga de inyectarlos a nuestra app

```
npm install --save-dev html-webpack-plugin

```



```
npm install --save-dev html-loader

Comando para estilos.

npm install --save-dev css-loader style-loader


```

Uso de este comando para realizar tipo servidor.

```
npm i -D webpack-dev-server
```


```
npm install --save-dev mini-css-extract-plugin
```
