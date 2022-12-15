import React from 'react';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Link = 'link',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type ButtonProps = {
  children: React.ReactNode;

  variant: ButtonVariant;
  size: ButtonSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
