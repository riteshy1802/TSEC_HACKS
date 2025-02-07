"use client"

import { useState } from "react"
import { MapIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const busData = [
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 1,
        status: "ready",
        vehicleNumber: "MH 01 AB 1234",
        driverName: "Rajesh Kumar",
        startDestination: "Mumbai",
        endDestination: "Pune",
        departureTime: "14:30",
    },
    {
        id: 2,
        status: "departed",
        vehicleNumber: "MH 02 CD 5678",
        driverName: "Amit Singh",
        startDestination: "Pune",
        endDestination: "Nashik",
        departureTime: "12:15",
    },
  // Add more bus data as needed
]

export default function Transportation() {
    const [activeTab, setActiveTab] = useState("ready")

    return (
        <div className="container mx-auto py-8 px-10 h-[100vh] overflow-y-auto bg-[#f8f8f8]">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-[#171717]">Bus Departure Information</h1>
                <Button variant="outline" size="icon">
                <MapIcon className="h-6 w-6 text-[#171717]" />
                </Button>
            </div>

            <Tabs defaultValue="ready" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="ready">Ready for Departure</TabsTrigger>
                <TabsTrigger value="departed">Departed</TabsTrigger>
                </TabsList>
                <TabsContent value="ready">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {busData
                    .filter((bus) => bus.status === "ready")
                    .map((bus) => (
                        <BusCard key={bus.id} bus={bus} />
                    ))}
                </div>
                </TabsContent>
                <TabsContent value="departed">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {busData
                    .filter((bus) => bus.status === "departed")
                    .map((bus) => (
                        <BusCard key={bus.id} bus={bus} />
                    ))}
                </div>
                </TabsContent>
            </Tabs>
        </div>
    )
    }

    function BusCard({ bus }) {
    return (
        <Card className="bg-white shadow-md">
        <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold text-[#171717]">{bus.vehicleNumber}</CardTitle>
            <Badge variant={bus.status === "ready" ? "default" : "secondary"}>
                {bus.status === "ready" ? "Ready" : "Departed"}
            </Badge>
            </div>
        </CardHeader>
        <CardContent>
            <div className="space-y-2 text-sm text-[#333333]">
            <p>
                <span className="font-medium">Driver:</span> {bus.driverName}
            </p>
            <p>
                <span className="font-medium">From:</span> {bus.startDestination}
            </p>
            <p>
                <span className="font-medium">To:</span> {bus.endDestination}
            </p>
            <p>
                <span className="font-medium">Departure Time:</span> {bus.departureTime}
            </p>
            </div>
        </CardContent>
        </Card>
    )
}

