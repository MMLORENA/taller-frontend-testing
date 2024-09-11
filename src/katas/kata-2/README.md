# KATA: INTERACCIÓN USUARIO

## INTRODUCCIÓN

Este ejercicio consiste en añadir un nuevo test a la suite proporcionada. Se trata de testear una interacción del
usuario con el componente `ProductsCard`.

![/assets/product-card.png](../../../public/assets/product-card.png)

### PASOS A SEGUIR:

Añade el caso de uso en que el usuario hace click al botón de 'Add' y la cantidad aumenta en 1.

```tsx
describe("And the user clicks on the 'Add' button", () => {
  test("Then the user should see the quantity increased by 1", async () => {
    // Arrange

    // Act

    // Assert
  });
});
```

Utiliza `userEvent` para testear la interacción del usuario.

#### Archivo a editar en la kata 👇:

- [Product Card Test](../../../src/katas/kata-2/ProductCard.test.tsx)
