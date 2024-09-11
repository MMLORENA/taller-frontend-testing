# KATA: UTILIZA LAS QUERIES APROPIADAS DE TESTING LIBRARY Y LOS MATCHERS DE JEST-DOM

## FASE 1:

Este ejercicio es para practicar las queries de Testing Library y los matchers de jest-dom. Acabamos de hablar del
orden recomendado para usar las queries de Testing Library basados en la accesibilidad.

El ejercicio consiste en corregir la suite de test de `ProductCard` basado en la explicación que acabamos de dar.

### PASOS A SEGUIR:

1. Describe los tests usando Gherkin.
2. Organiza cada test siguiendo la estructura AAA (Arrange, Act, Assert).
3. Refactoriza los matchers y queries de los tests para que sigan las recomendaciones.
4. No te olvides de la accesibilidad.
4. Recuerda, no testeamos detalles de implementación y testeamos desde la perspectiva del usuario.

** Si te da tiempo, añade un test más comprobando que `Sold Out` no se muestre cuando el producto tiene stock
disponible.

## FASE 2: INTERACCIÓN CON EL USUARIO

Añade el caso de uso de que el usuario hace click al botón de 'Add' y la cantidad aumenta en 1.

```tsx
describe("And the user clicks on the 'Add' button", () => {
  test("Then the user should see the quantity increased by 1", async () => {
    // Arrange

    // Act

    // Assert
  });
});
```


