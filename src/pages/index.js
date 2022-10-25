import { Fragment } from 'react';


import HomePage from '../helpers/homePage';
import BlogRead from '../helpers/Read';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


export default function Index(props) {
  return (
    <Fragment>
      <NavBar />
      <BlogRead data="data"/>
      <Footer />
    </Fragment>
  );
}
