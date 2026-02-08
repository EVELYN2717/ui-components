# User Infertace Componentes Library

Una librería de componentes React estandarizados para aplicaciones frontend, construida con arquitectura component-first. Proporciona componentes accesibles, bien tipados y listos para producción.

## 📦 Instalación

### Instalar desde npm (cuando esté publicado)

```bash
npm install ui-components-evelynt@1.0.1
```

### Instalar desde archivo local

```bash
npm install ./ui-components-evelynt@1.0.1-1.0.1.tgz
```

### Requisitos

- React ^19.2.0
- React DOM ^19.2.0

## 🚀 Uso Básico

### Importar componentes y estilos

```javascript
import { Button } from 'ui-components-evelynt';
import 'ui-components-evelynt/global-styles.css';
```

### Ejemplo básico

```jsx
import React from 'react';
import { Button } from 'ui-components-evelynt';
import 'ui-components-evelynt/global-styles.css';

function App() {
  return (
    <div>
      <Button label="Click me" onClick={() => alert('Clicked!')} />
    </div>
  );
}

export default App;
```

## 📚 Componentes

### Button

Componente de botón estandarizado con soporte para diferentes tamaños, estados y accesibilidad completa.

#### Props

| Prop | Tipo | Requerido | Por defecto | Descripción |
|------|------|-----------|-------------|-------------|
| `label` | `string` | ✅ Sí | - | Texto que se muestra en el botón |
| `size` | `'small' \| 'medium' \| 'large'` | ❌ No | `'medium'` | Tamaño del botón |
| `disabled` | `boolean` | ❌ No | `false` | Si el botón está deshabilitado |
| `loading` | `boolean` | ❌ No | `false` | Si el botón está en estado de carga |
| `onClick` | `function` | ❌ No | - | Función callback cuando se hace click |
| `type` | `'button' \| 'submit' \| 'reset'` | ❌ No | `'button'` | Tipo de botón HTML |
| `ariaLabel` | `string` | ❌ No | - | Label de accesibilidad (aria-label) |
| `className` | `string` | ❌ No | `''` | Clases CSS adicionales |

#### Ejemplos de uso

##### Botón básico

```jsx
<Button label="Click me" />
```

##### Diferentes tamaños

```jsx
<Button label="Small Button" size="small" />
<Button label="Medium Button" size="medium" />
<Button label="Large Button" size="large" />
```

##### Estado disabled

```jsx
<Button label="Disabled Button" disabled />
```

##### Estado loading

```jsx
<Button label="Loading..." loading />
```

##### Con onClick handler

```jsx
<Button 
  label="Submit" 
  onClick={() => {
    console.log('Button clicked!');
  }} 
/>
```

##### En un formulario

```jsx
<form onSubmit={handleSubmit}>
  <input type="text" name="email" />
  
  {/* Botón de envío */}
  <Button 
    type="submit" 
    label="Enviar Formulario" 
  />
  
  {/* Botón de cancelar */}
  <Button 
    type="button" 
    label="Cancelar" 
    onClick={handleCancel} 
  />
  
  {/* Botón de reset */}
  <Button 
    type="reset" 
    label="Limpiar" 
  />
</form>
```

##### Con accesibilidad personalizada

```jsx
<Button 
  label="→" 
  ariaLabel="Siguiente página" 
  onClick={handleNext} 
/>
```

##### Con className personalizada

```jsx
<Button 
  label="Custom Button" 
  className="my-custom-class" 
/>
```

##### Combinación de props

```jsx
<Button 
  label="Submit Form" 
  size="large" 
  type="submit" 
  loading={isSubmitting}
  disabled={!isFormValid}
  onClick={handleSubmit}
  ariaLabel="Enviar formulario de contacto"
/>
```

## 🎨 Constantes disponibles

Las constantes están disponibles internamente en la librería. Si necesitas usarlas en tu proyecto, puedes importarlas directamente desde el código fuente o crear tus propias constantes basadas en los valores estándar:

**Valores de tamaño disponibles:**
- `'small'`
- `'medium'` (por defecto)
- `'large'`

**Estados disponibles:**
- `'enabled'`
- `'disabled'`

**Tipos de botón:**
- `'button'` (por defecto)
- `'submit'`
- `'reset'`

## ♿ Accesibilidad

Todos los componentes incluyen atributos ARIA para mejorar la accesibilidad:

- `aria-label`: Descripción del botón para lectores de pantalla
- `aria-busy`: Indica cuando el botón está procesando (loading)
- `aria-disabled`: Indica cuando el botón está deshabilitado
- `role="button"`: Reafirma el rol del elemento

## 🧪 Testing

La librería incluye tests unitarios completos con Jest y React Testing Library.

### Ejecutar tests

```bash
npm test
```

### Tests en modo watch

```bash
npm run test:watch
```

### Coverage

```bash
npm run test:coverage
```

## 🛠️ Desarrollo

### Scripts disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Build
npm run build        # Construye la librería para producción

# Testing
npm test            # Ejecuta tests
npm run test:watch  # Tests en modo watch
npm run test:coverage # Tests con coverage

# Linting
npm run lint        # Ejecuta ESLint
```

### Estructura del proyecto

```
ui-components/
├── src/
│   ├── components/      # Componentes de la librería
│   │   └── Button/     # Componente Button
│   ├── commons/        # Constantes y utilidades compartidas
│   └── index.jsx       # Punto de entrada principal
├── dist/              # Build de producción
└── package.json
```

## 📝 Notas

- Los componentes están construidos con **PropTypes** para validación de tipos
- Todos los componentes siguen las mejores prácticas de **accesibilidad (WCAG)**
- La librería usa **CSS modules** para estilos encapsulados
- Los componentes son **completamente funcionales** y listos para producción

## 📄 Licencia

OpenSource

## 🤝 Contribuir

Escribir un correo a evelynt.gutierrez@gmail.com con la propuesta de constribución y el posible fork de trabajo 

## 📧 Contacto

Evelyn Gutierrez
evelynt.gutierrez@gmail.com
