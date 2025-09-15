# 📝 Mi Lista de Tareas

Applicación de lista de tareas construida con Angular y Angular Material. Gestiona tus tareas diarias de manera eficiente con una interfaz limpia y moderna.

## 🚀 Características

* **Añadir Tareas**: Agrega nuevas tareas a tu lista.
* **Marcar como Completada**: Marca las tareas como completadas.
* **Editar Tareas**: Modifica el nombre de una tarea existente.
* **Eliminar Tareas**: Elimina tareas que ya no necesitas.
* **Persistencia de Datos**: Tus tareas se guardan en el navegador, por lo que no las perderás al recargar la página.


## 🛠️ Tecnologías

* **Angular**: El framework principal para la aplicación.
* **Angular Material**: Para componentes de interfaz de usuario limpios y profesionales.
* **TypeScript**: El lenguaje de programación utilizado.
* **CSS / HTML**: Para la estructura y el estilo de la aplicación.
* **Local Storage**: Para la persistencia de datos.


## ⚙️ Instalación y Uso

Sigue estos pasos para tener una copia local del proyecto en funcionamiento.

### Requisitos Previos

* [Node.js](https://nodejs.org/) (versión 16.x o superior)
* [Angular CLI](https://angular.io/cli) (se recomienda la última versión)

### Pasos

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/AngelMontesR/task-app
    cd task-app
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```

3.  Ejecuta la aplicación:
    ```bash
    ng serve
    ```

4.  Abre tu navegador y navega a `http://localhost:4200/`.


## 📁 Estructura del Proyecto

El proyecto sigue una arquitectura modular basada en características (Feature-Based Modular Architecture) combinada con el patrón de Servicios y Componentes de Angular.

Modularidad: La aplicación está organizada por funcionalidades. El directorio task/ contiene todos los componentes y la lógica relacionados con las tareas. Esto mantiene el código limpio, escalable y fácil de mantener.

Servicios: Un servicio (TaskService) actúa como el único origen de la verdad. Se encarga de la lógica de negocio (añadir, editar, eliminar) y la persistencia de datos, aislando estas responsabilidades de los componentes.

Componentes: Los componentes (task-form, task-list, task-item) se centran en la interfaz de usuario. Interactúan con el servicio para obtener y manipular los datos, pero no se comunican directamente entre ellos.

```
.
├── src/                          # Directorio de la aplicación
│   ├── app/
│   │   ├── interfaces/           # Modelos de datos y tipado
│   │   │   └── task.interface.ts
│   │   ├── services/             # Servicios de la aplicación
│   │   │   └── task.service.ts
│   │   ├── shared/               # Módulos y componentes reutilizables
│   │   │   └── angular-material/
│   │   │       └── angular-material.module.ts # Módulo para importar componentes de Material
│   │   ├── task/                 # Componentes de la lista de tareas
│   │   │   ├── task-form/        # Formulario para añadir tareas
│   │   │   │   ├── task-form.component.ts
│   │   │   │   └── ...
│   │   │   ├── task-item/        # Componente para mostrar una sola tarea
│   │   │   │   ├── task-item.component.ts
│   │   │   │   └── ...
│   │   │   └── task-list/        # Componente para mostrar la lista de tareas
│   │   │       ├── task-list.component.ts
│   │   │       └── ...
│   │   └── app.component.ts      # Componente raíz de la aplicación
```
