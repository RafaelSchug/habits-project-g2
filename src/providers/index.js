import { AuthProvider } from "./auth";
import { SidebarProvider } from "./sidebar";
import { UserDashboardProvider } from "./userDashboard";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <UserDashboardProvider>
          {children}
        </UserDashboardProvider>
      </SidebarProvider>
    </AuthProvider>
  );
};

export default Providers;
