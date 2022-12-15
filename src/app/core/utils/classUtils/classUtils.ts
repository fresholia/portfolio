
type ConditionalClassName = {
  [key: string]: boolean;
}
type CombineClassNamesProps = (string | undefined | ConditionalClassName)[];

export function combineClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(' ');
}