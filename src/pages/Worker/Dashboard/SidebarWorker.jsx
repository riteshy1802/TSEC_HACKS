import { Link } from "react-router-dom"
import {
    LayoutDashboard,
    Users,
    UserPlus,
    BookOpen,
    LandPlot,
    PiggyBank,
    Briefcase,
    Truck,
    Settings,
    LogOut,
    User,
} from "lucide-react"

const SidebarWorker = () => {
    return (
        <aside className="fixed left-0 top-0 w-64 h-full bg-white border-r flex flex-col">
        <div className="p-4 flex-grow">
            <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-semibold">Sahayak</span>
            </div>

            <nav className="space-y-1">
                <SidebarLink href="/worker/dashboard" icon={LayoutDashboard}>
                    Dashboard
                </SidebarLink>
                <SidebarLink href="/worker/explore-jobs" icon={Briefcase}>
                    Explore Jobs
                </SidebarLink>
                <SidebarLink href="/worker/transportation" icon={Truck}>
                    Transportation
                </SidebarLink>
                <SidebarLink href="/worker/groups" icon={UserPlus}>
                    Groups
                </SidebarLink>
                <SidebarLink href="/worker/development" icon={BookOpen}>
                    Skill Development
                </SidebarLink>
                <SidebarLink href="/worker/government-schemes" icon={LandPlot}>
                    Government Schemes
                </SidebarLink>
                <SidebarLink href="/worker/expense-tracking" icon={PiggyBank}>
                    Expense Tracking
                </SidebarLink>
                <SidebarLink href="/worker/profile" icon={User}>
                    Profile
                </SidebarLink>
            </nav>
        </div>

        <div className="p-4 border-t">
            <SidebarLink href="/settings" icon={Settings}>
                Settings
            </SidebarLink>
            <SidebarLink href="/logout" icon={LogOut}>
                Logout
            </SidebarLink>
        </div>
        </aside>
    )
}

const SidebarLink = ({ href, icon: Icon, children }) => {
    return (
        <Link
            to={href}
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-150"
        >
        <Icon className="w-5 h-5" />
            {children}
        </Link>
    )
}

export default SidebarWorker

