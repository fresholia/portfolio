import { PageContentProps } from './PageContent.types';
import styles from './PageContent.module.scss';

export default function PageContent({ children }: PageContentProps) {
  return <section className={styles.pageContent}>{children}</section>;
}
