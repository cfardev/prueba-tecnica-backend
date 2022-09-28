## Scripts

Inicializar el API

    npm start

Iniciar el API en modo escucha

    npm run dev

## Rutas y ejemplos

Obtener usuarios

    http://localhost:5000/users

### Obtener usuario por id

    http://localhost:5000/users/:id

Ejemplo:

    http://localhost:5000/users/2

### Crear usuario

    http://localhost:5000/users

Ejemplo de Body

    {
    "firstName":  "Jonathan",
    "lastName":  "Castro",
    "email":  "jonacas234@gmail.com"
    }

### Obtener los Todos de un usuario

    http://localhost:5000/users/:id/todos

Ejemplo:

    http://localhost:5000/users/2/todos

### Obtener toda la información de un To Do

    http://localhost:5000/todos/:id

Ejemplo:

    http://localhost:5000/todos/4

### Crear una tarea

    http://localhost:5000/todos/:id/task

Ejemplo:

    http://localhost:5000/todos/1/task

Body:

    {
    "title":  "Responder ejercicios de cálculo",
    "completed":  false
    }
