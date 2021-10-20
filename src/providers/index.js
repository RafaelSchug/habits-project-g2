import { AuthProvider } from "./auth";
import { GroupListProvider } from "./groupList";
import { ModalProvider } from "./modal";
import { SidebarProvider } from "./sidebar";
import { UserDashboardProvider } from "./userDashboard";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <ModalProvider>
          <GroupListProvider>
            <UserDashboardProvider>
              {children}
            </UserDashboardProvider>
          </GroupListProvider>
        </ModalProvider>
      </SidebarProvider>
    </AuthProvider>
  );
};

export default Providers;
