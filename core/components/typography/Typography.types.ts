import React from 'react';
import colors from '../../ui/styles/Colors.module.scss';

export enum TypographyVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  CAPTION = 'caption',
  BODY = 'body',
  SMALL = 'small',
}

export enum TypographyWeight {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  BOLD = 'bold',
}

type Colors = keyof typeof colors;

type TypographyOwnProps<E extends React.ElementType = React.ElementType> = {
  children: React.ReactNode;
  variant?: TypographyVariant;
  textColor?: Colors;
  textWeight?: TypographyWeight;
  as?: E;
};

type TypographyProps<E extends React.ElementType> = TypographyOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TypographyOwnProps<E>>;

export type { Colors, TypographyProps };
