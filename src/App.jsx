import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import WorkerRegister from "./pages/Auth/WorkerRegister";
import SidebarEmployer from "./pages/employer/employerDashboard/SidebarEmployer";
import EmployerLayout from "./layout/EmployerLayout";
import EmployerDashboard from "./pages/employer/employerDashboard/EmployerDashboard";
import PostJobPage from "./pages/employer/employerDashboard/PostJobPage";
import PostedJob from "./pages/employer/employerDashboard/PostedJob";
import EmployerRegister from "./pages/Auth/EmployerRegister";
import SkillDevelopmentPage from './pages/Worker/SkillDevelopment/SkillDevelopment';
import WorkerDashboard from "./pages/Worker/Dashboard/WorkerDashboard";
import Profile from "./pages/Worker/Profile/Profile";
import WorkerLayout from "./layout/WorkerLayout";
import Transportation from "./pages/Worker/Transportation/Transportation";
import Community from "./pages/Worker/Community/Community";
import Groups from "./pages/Worker/Groups/Groups";
import ExpenseTrackerParent from "./pages/Worker/ExpenseTracker/ExpenseTrackerParent";
import ExploreJobs from "./pages/Worker/ExploreJobs/ExploreJobs";
import GovernmentSchemes from "./pages/Worker/GovernmentShcemes/GovernmentSchemes";
import JobDetailsPage from "./pages/Worker/ExploreJobs/JobDetailsPage";
import { Toaster } from 'react-hot-toast';
import EmployeeAttendence from "./pages/employer/employerDashboard/EmployeeAttendence";
import Map from "./pages/landingPage/Map";
import LandingPage from './pages/landingPage/LandingPage';

  export const baseUrl =
    "https://wired-octopus-unique.ngrok-free.app";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
          <Route path="user/login" element={<WorkerRegister />} />
          <Route path="map" element={<Map />} />
          <Route path="user/dash" element={<SidebarEmployer />} />
          <Route path="employer/login" element={<EmployerRegister />} />
        </Route>

        <Route path="employer" element={<EmployerLayout />}>
          <Route index element={<EmployerDashboard />} />
          <Route path="job" element={<PostJobPage />} />
          <Route path="postedJob" element={<PostedJob />} />
          <Route path="attendence" element={<EmployeeAttendence />} />
        </Route>

        <Route path="worker" element={<WorkerLayout />}>
          <Route path="/worker/dashboard" index element={<WorkerDashboard />} />
          <Route
            path="/worker/development"
            element={<SkillDevelopmentPage />}
          />
          <Route path="/worker/explore-jobs" element={<ExploreJobs />} />
          <Route path="/worker/explore-jobs/:id" element={<JobDetailsPage />} />
          <Route path="/worker/transportation" element={<Transportation />} />
          <Route path="/worker/community" element={<Community />} />
          <Route path="/worker/groups" element={<Groups />} />
          <Route
            path="/worker/government-schemes"
            element={<GovernmentSchemes />}
          />
          <Route
            path="/worker/expense-tracking"
            element={<ExpenseTrackerParent />}
          />
          <Route path="/worker/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
