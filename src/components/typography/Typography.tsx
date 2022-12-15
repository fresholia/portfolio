import React from 'react';
import { TypographyProps, TypographyVariant, TypographyWeight } from "./Typography.types";
import { combineClassNames } from "app/core/utils/classUtils/classUtils";

import styles from './Typography.module.scss';

export const DEFAULT_TYPOGRAPHY_ELEMENT: React.ElementType = 'div';

function Typography<
  E extends React.ElementType = typeof DEFAULT_TYPOGRAPHY_ELEMENT
>({
  variant = TypographyVariant.BODY,
  textColor = 'primary',
  textWeight = TypographyWeight.REGULAR,
  children,
  className,
  as: WrapperElement,
  ...props
}: TypographyProps<E>) {
  const Component = WrapperElement || DEFAULT_TYPOGRAPHY_ELEMENT;

  return (
    <Component
      className={combineClassNames(
        styles.root,
        'is-flex',
        'is-align-center',
        styles[`typography--${variant}`],
        styles[`typography--${textWeight}`],
        `color--${textColor}`,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

Typography.Variant = TypographyVariant;
Typography.Weight = TypographyWeight;

export default Typography;
export * from './Typography.types';