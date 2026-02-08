import PropTypes from 'prop-types';
import './Button.css';
import {
    SIZES,
    SIZES_ARRAY,
    COMPONENT_STATES,
    BUTTON_TYPES,
    BUTTON_TYPES_ARRAY,
    BUTTON_CSS_CLASSES,
    BUTTON_DEFAULTS,
    ARIA_ROLES,
} from '../../commons/constants';

function Button_lib(props) {
    const {
        label,
        size = BUTTON_DEFAULTS.SIZE,
        disabled = BUTTON_DEFAULTS.DISABLED,
        loading = BUTTON_DEFAULTS.LOADING,
        onClick,
        type = BUTTON_DEFAULTS.TYPE,
        ariaLabel,
        className = BUTTON_DEFAULTS.CLASS_NAME,
        ...restProps
    } = props;

    const state = disabled || loading ? COMPONENT_STATES.DISABLED : COMPONENT_STATES.ENABLED;
    const sizeClass = `${BUTTON_CSS_CLASSES.SIZE_PREFIX}${size}`;
    const loadingClass = loading ? BUTTON_CSS_CLASSES.LOADING : '';
    const combinedClassName = `${sizeClass} ${state} ${loadingClass} ${className}`.trim();

    const handleClick = (e) => {
        if (disabled || loading) {
            e.preventDefault();
             return;
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            type={type}
            className={combinedClassName}
            disabled={disabled || loading}
            onClick={handleClick}
            aria-label={ariaLabel || label}
            aria-busy={loading}
            aria-disabled={disabled || loading}
            role={ARIA_ROLES.BUTTON}
            {...restProps}
        >
            {loading ? (
                <>
                    <span className={BUTTON_CSS_CLASSES.SPINNER} aria-hidden="true"></span>
                    <span className={BUTTON_CSS_CLASSES.LOADING_TEXT}>{label}</span>
                </>
            ) : (
                label
            )}
        </button>
    );
}

Button_lib.propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(SIZES_ARRAY),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(BUTTON_TYPES_ARRAY),
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
};

Button_lib.defaultProps = {
    size: BUTTON_DEFAULTS.SIZE,
    disabled: BUTTON_DEFAULTS.DISABLED,
    loading: BUTTON_DEFAULTS.LOADING,
    type: BUTTON_DEFAULTS.TYPE,
    className: BUTTON_DEFAULTS.CLASS_NAME,
};

export default Button_lib;
