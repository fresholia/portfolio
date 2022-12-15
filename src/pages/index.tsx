import Page from 'components/page/Page';
import Navbar from 'components/navbar/Navbar';

export default function Home() {
  return (
    <Page title="Home">
      <Page.Header>
        <Navbar />
      </Page.Header>
      <Page.Content>
        <h1>Home</h1>
      </Page.Content>
    </Page>
  );
}
