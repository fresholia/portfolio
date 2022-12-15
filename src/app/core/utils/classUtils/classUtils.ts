export function combineClassNames(...classNames: string[]): string {
  return classNames.filter(Boolean).join(' ');
}