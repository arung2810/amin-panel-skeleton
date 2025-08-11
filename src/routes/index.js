import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from '../components/layout';
import Authentication from '../pages/Authentication';

function AppRouter() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/sign-in' element={<Authentication />} />
            {/* <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/product-search' element={<ProductSearch />} />
            </Route> */}
          </Routes>
        </Router>
    </>
  );
}

export default AppRouter;
