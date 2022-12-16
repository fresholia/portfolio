import { NavbarItems } from './Navbar.constants';

import styles from './Navbar.module.scss';
import { combineClassNames } from 'utils/classUtils';
import Button from '../button/Button';

export default function Navbar() {
  return (
    <nav
      className={combineClassNames(styles.root, 'is-flex', 'is-align-center')}
    >
      <ul className={combineClassNames(styles.list, 'is-flex')}>
        {NavbarItems.map(({ label, link }) => (
          <li key={label} className={styles.item}>
            <Button variant={Button.Variant.Link} size={Button.Size.Medium}>
              {label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
