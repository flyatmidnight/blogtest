import { Header } from '../components/header';

function About() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-8 py-11">
        <div>
          <img
            src="me-summer21.jpeg"
            style={{ height: '120px', borderRadius: '1px' }}
          />
          <p
            style={{
              padding: '10px 0',
              letterSpacing: '-0.3px',
            }}
          >
            I work as a Product Advocate at Vercel. Before I studied political
            science w. quantitative methods at Warwick University, and worked as
            a self-taught software developer.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
