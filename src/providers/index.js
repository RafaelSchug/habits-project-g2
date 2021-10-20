import { AuthProvider } from "./auth";
import { ModalProvider } from "./modal";
import { SidebarProvider } from "./sidebar";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <ModalProvider>{children}</ModalProvider>
      </SidebarProvider>
    </AuthProvider>
  );
};

export default Providers;
