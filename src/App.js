import Layout from './components/Layout';
import Page from './components/Page';
import content from './content.json';
import { useState } from 'react';
import { CSSTransition, TransitionGroup }  from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  // Setup variables
  const pages = content.pages;
  const menu = pages.map(page => {
    return {
      slug: page.slug,
      title: page.title
    }
  });
  // useState to save paging
  const [page, setPage] = useState(pages[0]);
  // also useState to store transition
  const [pageTransition, setPageTransition] = useState(true);

  // Go to next page
  const nextPage = () => {
    const pageIndex = pages.findIndex((thisPage) => thisPage === page);
    pageIndex < pages.length-1? setPage(pages[pageIndex+1]) : setPage(pages[0]);
  }
  // Go to a specific page using slug
  const goToPage = (slug) => {
    const pageIndex = pages.findIndex(page => page.slug === slug);
    setPage(pages[pageIndex]);
  }

  return (
    <TransitionGroup>
    <CSSTransition 
      in={pageTransition}
      key={uuidv4()}
      timeout={400}
      classNames='slide'>
    <div className="App bg-cover bg-repeat" style={{backgroundImage: `url(/backgrounds/${page.blocks[0].background})`}}>
      <div className="container px-6 mx-auto my-0 flex flex-col justify-items-auto h-screen overflow-auto">
        <Layout menu={menu} active={page.slug} onMenuClick={goToPage} />
        <Page page={page.blocks[0]} action={nextPage} />
      </div>
    </div>
    </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
