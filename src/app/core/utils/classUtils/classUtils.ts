export function combineClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(' ');
}