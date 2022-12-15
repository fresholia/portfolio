import Link from 'next/link';
import { NavbarItems } from './Navbar.constants';

import styles from './Navbar.module.scss';
import { combineClassNames } from 'app/core/utils/classUtils/classUtils';
import Button from "../button/Button";

export default function Navbar() {
  return (
    <nav
      className={combineClassNames(styles.root, 'is-flex', 'is-align-center')}
    >
      <ul className={styles.list}>
        {NavbarItems.map(({ label, link }) => (
          <li key={label} className={styles.item}>
            <Link href={link}>
              <Button variant={Button.Variant.Primary} size={Button.Size.Medium}>{label}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
