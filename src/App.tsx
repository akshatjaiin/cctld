import { Routes, Route } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/*" element={<AdminLayout />} />
    </Routes>
  );
};

export default App;
