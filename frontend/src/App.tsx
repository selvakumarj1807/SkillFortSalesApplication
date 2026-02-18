import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import AdminAppLayout from "./layout/AdminAppLayout";
import AdminBlank from "./pages/AdminBlank";
import AdminHome from "./pages/Dashboard/AdminHome";
import AddSalesPersonForm from "./pages/Forms/AddSalesPersonForm";
import AddStudentReferal from "./pages/Forms/AddStudentReferal";
import UserAppLayout from "./layout/UserAppLayout";
import SalesUserHome from "./pages/Dashboard/SalesUserHome";
import SalesUserAddStudentReferal from "./pages/Forms/SalesUserAddStudentReferal";

import UserSignUp from "./pages/AuthPages/UserSignUp";
import UserSignIn from "./pages/AuthPages/UserSignIn";
import UserProtectedRoute from "./layout/UserProtectedRoute";
import AdminSignIn from "./pages/AuthPages/AdminSignIn";
import AdminProtectedRoute from "./layout/AdminProtectedRoute";
import Refer_Earn from "./pages/Refer_Earn";
import UserBlank from "./pages/UserBlank";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Layout */}
        <Route element={<AppLayout />}>
          <Route path="/AppLayout" element={<Home />} />

          {/* Others Page */}
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blank" element={<Blank />} />

          {/* Forms */}
          <Route path="/form-elements" element={<FormElements />} />

          {/* Tables */}
          <Route path="/basic-tables" element={<BasicTables />} />

          {/* Ui Elements */}
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/badge" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />

          {/* Charts */}
          <Route path="/line-chart" element={<LineChart />} />
          <Route path="/bar-chart" element={<BarChart />} />
        </Route>

        {/* Admin Layout */}
        <Route element={
          <AdminProtectedRoute>
            <AdminAppLayout />
          </AdminProtectedRoute>
        }>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/addSalesPerson" element={<AddSalesPersonForm />} />
          <Route path="/addSaleProducts" element={<AdminBlank />} />
          <Route path="/addStudentReferral" element={<AddStudentReferal />} />
        </Route>

        {/* User Layout */}
        <Route element={
          <UserProtectedRoute>
            <UserAppLayout />
          </UserProtectedRoute>
        }>
          <Route path="/user" element={<SalesUserHome />} />
          <Route path="/userAddStudentReferral" element={<SalesUserAddStudentReferal />} />
          <Route path="/usermanageStudentReferral" element={<UserBlank />} />
          <Route path="/refer" element={<Refer_Earn />} />
        </Route>

        <Route path="/" element={<UserSignIn />} />

        {/* Auth Layout */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/userSignup" element={<UserSignUp />} />
        <Route path="/userSignin" element={<UserSignIn />} />

        <Route path="/adminSignin" element={<AdminSignIn />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}
