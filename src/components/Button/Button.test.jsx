import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  describe('Renderizado básico', () => {
    it('debe renderizar el botón con el label proporcionado', () => {
      render(<Button label="Click me" />);
      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
    });

    it('debe renderizar con el tamaño por defecto (medium)', () => {
      render(<Button label="Test" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn-medium');
    });

    it('debe aplicar el tamaño correcto cuando se proporciona', () => {
      const { rerender } = render(<Button label="Test" size="small" />);
      let button = screen.getByRole('button');
      expect(button).toHaveClass('btn-small');

      rerender(<Button label="Test" size="large" />);
      button = screen.getByRole('button');
      expect(button).toHaveClass('btn-large');
    });
  });

  describe('Estado disabled', () => {
    it('debe estar habilitado por defecto', () => {
      render(<Button label="Test" />);
      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
      expect(button).toHaveClass('enabled');
    });

    it('debe estar deshabilitado cuando disabled es true', () => {
      render(<Button label="Test" disabled />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('no debe ejecutar onClick cuando está disabled', () => {
      const handleClick = jest.fn();
      render(<Button label="Test" disabled onClick={handleClick} />);
      const button = screen.getByRole('button');
      
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('debe retornar temprano cuando está disabled y se hace click', () => {
      const handleClick = jest.fn();
      const { container } = render(<Button label="Test" disabled onClick={handleClick} />);
      const button = container.querySelector('button');
      
      // Simular click directo
      const event = new Event('click', { bubbles: true, cancelable: true });
      button.dispatchEvent(event);
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Estado loading', () => {
    it('debe mostrar el spinner cuando loading es true', () => {
      render(<Button label="Test" loading />);
      const button = screen.getByRole('button');
      const spinner = button.querySelector('.btn-spinner');
      
      expect(spinner).toBeInTheDocument();
      expect(button).toHaveClass('btn-loading');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('debe estar deshabilitado cuando loading es true', () => {
      render(<Button label="Test" loading />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled');
    });

    it('no debe ejecutar onClick cuando está loading', () => {
      const handleClick = jest.fn();
      render(<Button label="Test" loading onClick={handleClick} />);
      const button = screen.getByRole('button');
      
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('debe retornar temprano cuando está loading y se hace click', () => {
      const handleClick = jest.fn();
      const { container } = render(<Button label="Test" loading onClick={handleClick} />);
      const button = container.querySelector('button');
      
      // Simular click directo
      const event = new Event('click', { bubbles: true, cancelable: true });
      button.dispatchEvent(event);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('debe mostrar el texto con opacidad reducida cuando está loading', () => {
      render(<Button label="Loading..." loading />);
      const loadingText = screen.getByText('Loading...');
      expect(loadingText).toHaveClass('btn-loading-text');
    });
  });

  describe('Eventos onClick', () => {
    it('debe ejecutar onClick cuando se hace click en el botón', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(<Button label="Click me" onClick={handleClick} />);
      const button = screen.getByRole('button');
      
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('debe pasar el evento al handler onClick', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(<Button label="Click me" onClick={handleClick} />);
      const button = screen.getByRole('button');
      
      await user.click(button);
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  describe('Accesibilidad', () => {
    it('debe tener el rol button', () => {
      render(<Button label="Test" />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('debe usar el label como aria-label por defecto', () => {
      render(<Button label="Click here" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Click here');
    });

    it('debe usar ariaLabel cuando se proporciona', () => {
      render(<Button label="Test" ariaLabel="Custom aria label" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom aria label');
    });

    it('debe tener aria-busy cuando está loading', () => {
      render(<Button label="Test" loading />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('debe tener aria-disabled cuando está disabled', () => {
      render(<Button label="Test" disabled />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('debe tener aria-disabled cuando está loading', () => {
      render(<Button label="Test" loading />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

  });

  describe('Props adicionales', () => {
    it('debe aceptar className personalizada', () => {
      render(<Button label="Test" className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('debe aceptar type personalizado', () => {
      render(<Button label="Test" type="submit" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('debe usar type="button" por defecto', () => {
      render(<Button label="Test" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('debe pasar props adicionales al elemento button', () => {
      render(<Button label="Test" data-testid="custom-button" id="button-id" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-testid', 'custom-button');
      expect(button).toHaveAttribute('id', 'button-id');
    });
  });

  describe('Combinaciones de estados', () => {
    it('debe priorizar loading sobre disabled', () => {
      render(<Button label="Test" disabled loading />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('btn-loading');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('debe mantener el estado enabled cuando no está disabled ni loading', () => {
      render(<Button label="Test" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('enabled');
      expect(button).not.toHaveClass('disabled');
      expect(button).not.toHaveClass('btn-loading');
    });
  });
});
