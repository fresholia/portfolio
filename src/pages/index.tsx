import Page from 'components/page/Page';
import Navbar from 'components/navbar/Navbar';
import Typography from "../components/typography/Typography";

export default function Home() {
  return (
    <Page title="Home">
      <Page.Header>
        <Navbar />
      </Page.Header>
      <Page.Content>
        <Typography
          variant={Typography.Variant.H2}
          textColor="primary"
          textWeight={Typography.Weight.BOLD}
          as="h1"
        >
          enesakilliok
        </Typography>
      </Page.Content>
    </Page>
  );
}
