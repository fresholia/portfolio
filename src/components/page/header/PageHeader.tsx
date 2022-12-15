import { PageHeaderProps } from './PageHeader.props';
import styles from './PageHeader.module.scss';
import { combineClassNames } from "../../../app/core/utils/classUtils/classUtils";

export default function PageHeader({ children }: PageHeaderProps) {
  return <header className={combineClassNames('is-flex', 'is-centered', styles.root)}>{children}</header>;
}
