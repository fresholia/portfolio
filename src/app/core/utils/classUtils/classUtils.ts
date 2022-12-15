
type ConditionalClassName = {
  [key: string]: boolean;
}
type CombineClassNamesProps = (string | undefined | ConditionalClassName)[];

export function combineClassNames(...classNames: CombineClassNamesProps): string {
  return classNames.filter(Boolean).join(' ');
}