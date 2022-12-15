import withHead from 'app/core/page/PageWrapper';

function Home() {
  return <main>
    <h1> heyyoo! </h1>
  </main>
}

export default withHead({
  title: 'Home',
  description: 'Home page',
  keywords: 'home, page',
  robots: 'index, follow',
})(Home);