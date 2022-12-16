import PageHeader from './header/PageHeader';
import PageContent from './content/PageContent';

import { PageProps } from './Page.types';
import styles from './Page.module.scss';

import { combineClassNames } from 'utils/classUtils';

function Page({ title, children }: PageProps) {
  return (
    <>
      <main
        className={combineClassNames(
          styles.root,
          'is-flex',
          'is-flex-direction-column'
        )}
      >
        {children}
      </main>
    </>
  );
}

Page.Header = PageHeader;
Page.Content = PageContent;

export default Page;
