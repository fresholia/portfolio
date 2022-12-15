import { ButtonProps } from './Button.types';
import { combineClassNames } from 'app/core/utils/classUtils/classUtils';

import styles from './Button.module.scss';

export default function Button({
  variant,
  size = 'medium',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={combineClassNames(className, styles.root)} {...props}>
      {children}
    </button>
  );
}
