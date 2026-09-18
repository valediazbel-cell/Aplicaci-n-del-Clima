# 🌤️ Aplicación del Clima

Aplicación web sencilla desarrollada con **JavaScript** que permite consultar el clima actual de una ciudad.

El usuario ingresa el nombre de una ciudad y la aplicación utiliza la **Geocoding API de Open-Meteo** para obtener sus coordenadas. Después, utiliza la **Weather Forecast API** para consultar la temperatura y las condiciones meteorológicas actuales.

## 📋 Resumen del proyecto

El proyecto fue desarrollado utilizando tecnologías web básicas:

* HTML5 para la estructura.
* CSS3 para los estilos y diseño responsive.
* JavaScript ES6+ para la lógica de la aplicación.
* Fetch API para realizar las peticiones.
* Open-Meteo para obtener los datos de ubicación y clima.

La aplicación muestra la información de una forma sencilla y amigable, incluyendo la ciudad, el país, la temperatura actual y una descripción del clima.

## ✨ Funcionalidades

* 🔎 Buscar una ciudad por su nombre.
* 🌎 Obtener automáticamente el país de la ciudad.
* 📍 Obtener latitud y longitud mediante la Geocoding API.
* 🌡️ Consultar la temperatura actual en grados Celsius.
* ☁️ Mostrar una descripción del estado del clima.
* ⚠️ Mostrar mensajes cuando la ciudad no existe.
* 🌐 Manejar errores de conexión.
* 🚨 Detectar respuestas HTTP no exitosas de las APIs.
* 📱 Diseño adaptable para diferentes tamaños de pantalla.
* ☀️ Diseño visual con elementos creados únicamente mediante CSS.
* 🚫 Mostrar errores en la interfaz sin utilizar `alert()`.

## 📁 Estructura del proyecto

```text
app-clima/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── api.js
│   ├── app.js
│   └── ui.js
│
└── README.md
```

### Descripción de los archivos

**`index.html`**
Contiene la estructura principal de la aplicación, incluyendo el campo para ingresar la ciudad, el botón de búsqueda y el espacio donde se muestra el resultado.

**`css/styles.css`**
Contiene los estilos de la aplicación, como colores, tarjeta principal, botones, fondo, sol, nube y diseño responsive.

**`js/api.js`**
Se encarga de comunicarse con las APIs de Open-Meteo y obtener la información de la ciudad y del clima.

**`js/app.js`**
Controla la interacción entre el usuario, la API y la interfaz.

**`js/ui.js`**
Se encarga de mostrar en pantalla los resultados, mensajes de carga y mensajes de error.

## ⚙️ Instalación

### 1. Descargar o clonar el proyecto

Puedes descargar el proyecto desde GitHub o clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Abrir el proyecto

Abre la carpeta del proyecto utilizando **Visual Studio Code**.

### 3. Ejecutar con un servidor local

Se recomienda utilizar la extensión **Live Server** de Visual Studio Code.

Abre `index.html` y selecciona:

```text
Open with Live Server
```

Esto es importante porque el proyecto utiliza módulos JavaScript mediante `import` y `export`.

## 🚀 Guía de uso

1. Abre la aplicación en el navegador.
2. Escribe el nombre de una ciudad en el campo de búsqueda.
3. Presiona el botón **Buscar clima**.
4. La aplicación consulta primero la ubicación de la ciudad.
5. Después obtiene los datos meteorológicos actuales.
6. Finalmente, muestra la temperatura y la descripción del clima.

## 🧪 Ejemplo de resultado

Si el usuario escribe:

```text
Bogotá
```

la aplicación puede mostrar:

```text
🌡️ Temperatura en Bogotá (Colombia): 21.1 °C
```

Otro ejemplo:

```text
Madrid
```

Resultado:

```text
🌡️ Temperatura en Madrid (España): 18.4 °C
```

La temperatura puede cambiar dependiendo de las condiciones meteorológicas actuales.

## 🌐 APIs utilizadas

### Geocoding API

Se utiliza para convertir el nombre de una ciudad en coordenadas geográficas:

```text
https://geocoding-api.open-meteo.com/v1/search
```

La respuesta permite obtener información como:

* Nombre de la ciudad.
* País.
* Latitud.
* Longitud.

### Weather Forecast API

Se utiliza para obtener los datos meteorológicos actuales:

```text
https://api.open-meteo.com/v1/forecast
```

En este proyecto se utilizan principalmente:

* `temperature_2m`
* `weather_code`

El `weather_code` permite identificar condiciones como cielo despejado, lluvia, nieve, niebla o tormenta.

## ⚠️ Manejo de errores

La aplicación contempla diferentes situaciones:

### Ciudad no encontrada

Si el usuario escribe una ciudad que no existe:

```text
❌ No se encontró la ciudad "CiudadInventada".
```

### Problema de conexión

Si no es posible conectarse con Open-Meteo:

```text
❌ No se pudo conectar con Open-Meteo.
Revisa tu conexión a Internet.
```

### Error de la API

Si alguna de las APIs responde con un error HTTP, se muestra un mensaje indicando qué servicio presentó el problema.

## 🔮 Mejoras futuras

Algunas funcionalidades que podrían incorporarse en futuras versiones son:

* 🌡️ Mostrar sensación térmica.
* 💧 Mostrar porcentaje de humedad.
* 💨 Mostrar velocidad del viento.
* 🌧️ Mostrar probabilidad de lluvia.
* 📅 Mostrar el pronóstico de los próximos días.
* 🌍 Mostrar más información de la ubicación.
* 🕐 Mostrar la hora local de la ciudad.
* 🔍 Mejorar la búsqueda para aceptar nombres con o sin tildes, por ejemplo `Bogota` y `Bogotá`.
* 🗺️ Incorporar un mapa para visualizar la ubicación.
* 🎨 Agregar diferentes iconos según las condiciones meteorológicas.
* 🌙 Cambiar automáticamente el diseño entre modo día y noche.
* ⭐ Permitir guardar ciudades favoritas.

## 🛠️ Tecnologías

```text
HTML5
CSS3
JavaScript ES6+
Fetch API
Open-Meteo API
Visual Studio Code
```

## 👩‍💻 🤖 Autores

**Valeria**
ChatGPT

Proyecto desarrollado como práctica de JavaScript, consumo de APIs y manejo de datos obtenidos mediante `fetch` y `async/await`.




