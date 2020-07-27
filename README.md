# Práctica Ionic cámara y DB
En el apartado de los empleos se listan los empleos almacenados en la base de datos de Firestore <br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_1.png)<br />
Listado<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_2.png)<br />
Se procede a crear un nuevo empleo en el que se puede cargar una imagen desde la cámara<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_3.png)<br />
Se abre la cámara en este caso del dispositivo móvil y al tomar la fotografía y aceptar cargar esa imagen, se muestra un mensaje en el que se indica que la imagen se está cargando<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_4.png)<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_5.png)<br />
Y al estar cargada ya la imagen se puede ya crear el nuevo empleo en la base de datos, que al consultarla nuevamente muestra el nuevo empleo añadido y con su imagen correspondiente.<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_6.png)<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_7.png)<br />

# Componente llamada 
Se debe instalar los siguientes paquetes<br />
<strong>npm install call-number</strong><br />
<strong>npm install @ionic-native/call-number</strong><br />

Luego ejecutar en una terminal<br />
<strong>ionic cap sync</strong>

Este componente tiene como entrada un string que es el número de teléfono que se pasa al método para realizar la llamada.<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_8.png)<br />

El componente se muestra a modo de un botón que llamará a un método<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_9.png)<br />

Para incluirlo en la pagina hay que llamarlo con el nombre con el que aparece en selector dentro de component.ts<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_10.png)<br />

En la interfaz por cada empleo listado aparecerá el botón para realizar la llamada al número de teléfono disponible, pues el número recuperado de la base de datos se define como input para el componente.<br />
![alt text](https://github.com/Sterling01/PM-Practica01/blob/master/src/assets/images/imagenesGit/Screenshot_11.png)<br />
