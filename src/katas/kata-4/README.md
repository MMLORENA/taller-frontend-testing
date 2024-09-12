# KATA: Metodos Asincronos

## INTRODUCCIÓN

Este ejercicio es para ver de forma práctica algunas de las utilidades que ofrece Testing Library para trabajar con
métodos asíncronos.

En este caso, no vamos a tener que refactorizar el test, simplemente vamos a ver como funciona `waitFor` a través del
test del componente `AsyncButton`.

![Async Button Component](../../../public/assets/async-button.png)

## Información sobre el componente AsyncButton

- Contiene un boton que al hacer click en él, realiza una peticion asíncrona. Cuando llega la respuesta pasados unos
  segundos, aparece un mensaje de feedback `Fetched Data`.
- El mensaje no está siempre presente, solo cuando la petición ha sido realizada y ha llegado la respuesta.

### PASOS A SEGUIR:

## Paso 1:

1. Ejecuta el 1º test.

> **NOTA:** El test fallará. No tienes que hacer nada para arreglarlo.

¿Cuántas veces se llama a la función `fetchData`? ¿Por qué?

## Paso 2:

1. Cambia en la línea 10 el modificador `only` por `skip` del 1º test.
2. Ejecuta toda la suite de test (2º y 3º test).

¿Cuántas veces se llama en esos tests a la función `fetchData`?
¿Qué diferencias encuentras entre el 2º test y el 3º?
¿Qué test tarda menos tiempo en pasar?

#### Archivo a editar en la kata 👇:

- [Async Button test](../../../src/katas/kata-4/AsyncButton.test.tsx)
