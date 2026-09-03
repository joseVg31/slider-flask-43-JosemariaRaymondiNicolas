# Slider Flask

Slider de imágenes desarrollado con **Flask + Tailwind CSS v4 + HTML + CSS + JavaScript**, como actividad del curso de Tecnología Web. A diferencia del carrusel visto en clase, este proyecto implementa un slider con transición deslizante real, autoplay y controles adicionales.

## Tecnologías

- Python 3 / Flask
- Jinja2 (herencia de plantillas)
- Tailwind CSS v4 (Play CDN)
- JavaScript (vanilla)

## Funcionalidades

- Transición deslizante entre imágenes (`transform: translateX()`)
- Autoplay cada 4 segundos
- Barra de progreso del tiempo hasta el siguiente slide
- Pausa automática al pasar el mouse sobre el slider
- Soporte de swipe táctil en dispositivos móviles
- Navegación manual con botones prev/next y dots
- Dots generados dinámicamente según la cantidad de imágenes

## Estructura del proyecto

```
slider-flask/
├── app/
│   ├── __init__.py
│   ├── routes/
│   │   └── __init__.py
│   ├── static/
│   │   ├── css/
│   │   │   └── slider.css
│   │   ├── js/
│   │   │   └── slider.js
│   │   └── img/
│   └── templates/
│       ├── base.html
│       └── slider.html
├── app.py
├── requirements.txt
└── .gitignore
```

## Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/joseVg31/slider-flask-43-JosemariaRaymondiNicolas.git
cd slider-flask-43-JosemariaRaymondiNicolas

# Crear y activar entorno virtual
python -m venv venv
.\venv\Scripts\Activate.ps1      # Windows PowerShell
# source venv/bin/activate       # Linux / Mac

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar la aplicación
python app.py
```

Luego abrir [http://127.0.0.1:5000/](http://127.0.0.1:5000/) en el navegador.

## Documentación

El detalle completo del proceso de desarrollo, decisiones técnicas y código explicado paso a paso está en [`proceso-slider.md`](./proceso-slider.md).

## Autor

Jose Maria Raymondi Nicolas — Instituto Valle Grande
