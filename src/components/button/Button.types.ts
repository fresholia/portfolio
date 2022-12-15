import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  children: React.ReactNode;

  variant: ButtonVariant;
  size: ButtonSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
