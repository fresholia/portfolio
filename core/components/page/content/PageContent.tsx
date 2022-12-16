import { PageContentProps } from './PageContent.types';
import styles from './PageContent.module.scss';
import { combineClassNames } from 'utils/classUtils';

export default function PageContent({ children }: PageContentProps) {
  return (
    <section
      className={combineClassNames(
        styles.root,
        'is-flex',
        'is-flex-direction-column'
      )}
    >
      {children}
    </section>
  );
}
