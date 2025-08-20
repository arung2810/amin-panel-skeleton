import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import VerificationCode from '../pages/VerificationCode';
import Dashboard from '../pages/Dashboard';
import MyTraining from '../pages/MyTraining';
import DigitalDownloads from '../pages/DigitalDownloads';
import Webinars from '../pages/Webinars';
import Settings from '../pages/Settings';
import Course from '../pages/MyTraining/Course';

function AppRouter() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/verification-code' element={<VerificationCode />} />
            <Route path="/training/course" element={<Course />} />
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="training" element={<MyTraining />} >
              </Route>
              <Route path="downloads" element={<DigitalDownloads />} />
              <Route path="webinars" element={<Webinars />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default AppRouter;
