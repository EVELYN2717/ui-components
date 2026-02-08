/**
 * Constantes comunes reutilizables para todos los componentes
 */

// Tamaños disponibles (reutilizable en Button, Input, etc.)
export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export const SIZES_ARRAY = Object.values(SIZES);

// Estados genéricos de componentes (reutilizable)
export const COMPONENT_STATES = {
  ENABLED: 'enabled',
  DISABLED: 'disabled',
};

// Valores booleanos comunes
export const BOOLEAN_DEFAULTS = {
  FALSE: false,
  TRUE: true,
};

// Valores de string comunes
export const STRING_DEFAULTS = {
  EMPTY: '',
};

// Roles ARIA comunes
export const ARIA_ROLES = {
  BUTTON: 'button',
};

/**
 * Constantes específicas del componente Button
 */
export const BUTTON_TYPES = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
};

export const BUTTON_TYPES_ARRAY = Object.values(BUTTON_TYPES);

// Clases CSS específicas del Button
export const BUTTON_CSS_CLASSES = {
  LOADING: 'btn-loading',
  SPINNER: 'btn-spinner',
  LOADING_TEXT: 'btn-loading-text',
  SIZE_PREFIX: 'btn-', // Prefijo para las clases de tamaño (ej: btn-small)
};

// Valores por defecto específicos del Button
export const BUTTON_DEFAULTS = {
  SIZE: SIZES.MEDIUM,
  DISABLED: BOOLEAN_DEFAULTS.FALSE,
  LOADING: BOOLEAN_DEFAULTS.FALSE,
  TYPE: BUTTON_TYPES.BUTTON,
  CLASS_NAME: STRING_DEFAULTS.EMPTY,
};
