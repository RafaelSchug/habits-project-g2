import { AuthProvider } from "./auth";
import { ModalProvider } from "./modal";
import { SidebarProvider } from "./sidebar";
import { UserDashboardProvider } from "./userDashboard";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <ModalProvider>
          <UserDashboardProvider>
            {children}
          </UserDashboardProvider>
        </ModalProvider>
      </SidebarProvider>
    </AuthProvider>
  );
};

export default Providers;
