import { SidebarProvider } from "./sidebar"

const Providers = ({ children }) => {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default Providers