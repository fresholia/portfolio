import { PageHeaderProps } from './PageHeader.props';
import styles from './PageHeader.module.scss';
import { combineClassNames } from 'utils/classUtils';

export default function PageHeader({ children }: PageHeaderProps) {
  return (
    <header
      className={combineClassNames('is-flex', 'is-align-center', styles.root)}
    >
      {children}
    </header>
  );
}
