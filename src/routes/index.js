import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from '../components/layout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import VerificationCode from '../pages/VerificationCode';
import Dashboard from '../pages/Dashboard';

function AppRouter() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/verification-code' element={<VerificationCode />} />
            <Route path='/dashboard' element={<Dashboard />} />
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
