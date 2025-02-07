import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import profile from "../../../assets/workers/profile.png"
import { Clock, DollarSign, Star, Building2 } from "lucide-react"
import SidebarWorker from "./SidebarWorker"
import company from "../../../assets/workers/company.png";

export default function LabourDashboard() {
    return (
        <div className="min-h-screen bg-gray-50/50">
        <SidebarWorker />
        <div className="px-10">
            {/* Header */}
            <header className="w-[100%] h-16 border-b bg-white flex items-center justify-between">
                <div className="flex ml-auto px-2 py-1 rounded items-center gap-2">
                    <Avatar>
                        <img src={profile} />
                        <AvatarFallback>MM</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                    <p className="font-medium">Ramesh babu</p>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="py-6 space-y-6">
            <div className="grid grid-cols-3 gap-6">
                {/* Total Income Card */}
                <Card className="p-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-500">Total Income</h3>
                    <p className="text-2xl font-semibold">Rs. 84,912 </p>
                    <Badge className="mt-1 bg-green-100 text-green-600">+12.5% from last month</Badge>
                    </div>
                </div>
                </Card>

                {/* Ratings Card */}
                <Card className="p-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-full">
                    <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm text-gray-500">Overall Rating</h3>
                        <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-[gray] text-white">
                                <p>Average rating from all jobs</p>
                            </TooltipContent>
                        </Tooltip>
                        </TooltipProvider>
                    </div>
                    <p className="text-2xl font-semibold">4.8/5.0</p>
                    <p className="text-sm text-gray-500">Highest: 5.0</p>
                    </div>
                </div>
                </Card>

                {/* Hours Worked Card */}
                <Card className="p-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                    <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-500">Total Hours Worked</h3>
                    <p className="text-2xl font-semibold">1,248 hrs</p>
                    <p className="text-sm text-gray-500">This month: 156 hrs</p>
                    </div>
                </div>
                </Card>
            </div>

            {/* Job History Table */}
            <Card>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Employer</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Hours</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobHistory.map((job) => (
                    <TableRow key={job.id}>
                        <TableCell>
                        <div className="flex items-center gap-3">
                            <Avatar>
                            <AvatarImage src={job.avatar} />
                            <AvatarFallback>{job.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                            <p className="font-medium">{job.employer}</p>
                            <p className="text-sm text-gray-500">{job.id}</p>
                            </div>
                        </div>
                        </TableCell>
                        <TableCell>
                        <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-gray-500" />
                            {job.company}
                        </div>
                        </TableCell>
                        <TableCell>{job.date}</TableCell>
                        <TableCell>{job.hours} hrs</TableCell>
                        <TableCell>Rs. {job.payment}</TableCell>
                        <TableCell>
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {job.rating}
                        </div>
                        </TableCell>
                        <TableCell>
                        <Badge
                            className={
                            job.status === "Completed"
                                ? "bg-green-100 text-green-600"
                                : job.status === "In Progress"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-purple-100 text-purple-600"
                            }
                        >
                            {job.status}
                        </Badge>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </Card>
            </main>
        </div>
        </div>
    )
    }

    const jobHistory = [
        {
            id: "JOB-2023-001",
            employer: "John Smith",
            company: "Construction Co Ltd",
            avatar: company,
            initials: "JS",
            date: "19 December 2023",
            hours: 8,
            payment: "280 ",
            rating: 4.8,
            status: "Completed",
        },
        {
            id: "JOB-2023-002",
            employer: "Sarah Johnson",
            company: "BuildRight Inc",
            avatar: company,
            initials: "SJ",
            date: "21 December 2023",
            hours: 6,
            payment: "210 ",
            rating: 5.0,
            status: "In Progress",
        },
        {
            id: "JOB-2023-003",
            employer: "Mike Wilson",
            company: "City Works Dept",
            avatar: company,
            initials: "MW",
            date: "22 December 2023",
            hours: 4,
            payment: "160 ",
            rating: 4.9,
            status: "Upcoming",
        },
        {
            id: "JOB-2023-004",
            employer: "Emily Taylor",
            company: "Urban Developments",
            avatar: company,
            initials: "ET",
            date: "24 December 2023",
            hours: 10,
            payment: "350 ",
            rating: 4.7,
            status: "Completed",
        },
        {
            id: "JOB-2023-005",
            employer: "James Brown",
            company: "Greenfield Projects",
            avatar: company,
            initials: "JB",
            date: "26 December 2023",
            hours: 7,
            payment: "245 ",
            rating: 4.5,
            status: "In Progress",
        },
        {
            id: "JOB-2023-006",
            employer: "Olivia Green",
            company: "EcoBuild Ltd",
            avatar: company,
            initials: "OG",
            date: "28 December 2023",
            hours: 9,
            payment: "300 ",
            rating: 4.9,
            status: "Completed",
        },
        {
            id: "JOB-2023-007",
            employer: "Daniel Harris",
            company: "Redbrick Enterprises",
            avatar: company,
            initials: "DH",
            date: "30 December 2023",
            hours: 5,
            payment: "180 ",
            rating: 4.6,
            status: "Upcoming",
        },
        {
            id: "JOB-2023-008",
            employer: "Sophia Lee",
            company: "BrightPath Solutions",
            avatar: company,
            initials: "SL",
            date: "2 January 2024",
            hours: 8,
            payment: "270 ",
            rating: 5.0,
            status: "In Progress",
        },
        {
            id: "JOB-2023-009",
            employer: "Lucas Miller",
            company: "Skyline Constructors",
            avatar: company,
            initials: "LM",
            date: "5 January 2024",
            hours: 6,
            payment: "230 ",
            rating: 4.8,
            status: "Upcoming",
        },
        {
            id: "JOB-2023-010",
            employer: "Chloe Davis",
            company: "CityBuild Corp",
            avatar: company,
            initials: "CD",
            date: "7 January 2024",
            hours: 7,
            payment: "240 ",
            rating: 4.7,
            status: "Completed",
        },
    ]
    