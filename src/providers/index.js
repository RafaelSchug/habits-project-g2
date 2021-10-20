import { AuthProvider } from "./auth";
import { GroupListProvider } from "./groupList";
import { SidebarProvider } from "./sidebar";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <GroupListProvider>
          {children}
        </GroupListProvider>
      </SidebarProvider>
    </AuthProvider>
  );
};

export default Providers;
