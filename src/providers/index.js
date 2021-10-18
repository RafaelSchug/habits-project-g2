import { AuthProvider } from "./auth";
import { SidebarProvider } from "./sidebar";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </AuthProvider>
  );
};

export default Providers;
