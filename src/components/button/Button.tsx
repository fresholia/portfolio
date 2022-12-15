import { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';
import { combineClassNames } from 'app/core/utils/classUtils/classUtils';

import styles from './Button.module.scss';

function Button({
  variant,
  size = ButtonSize.Medium,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={combineClassNames(
        className,
        styles.root,
        styles[`button-${variant}`],
        styles[`button-${size}`]
      )}
      {...props}
    >
      {children}
    </button>
  );
}

Button.Variant = ButtonVariant;
Button.Size = ButtonSize;

export default Button;