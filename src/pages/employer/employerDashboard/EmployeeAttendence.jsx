"use client";

import React, { useState, useEffect, useRef } from "react";
import QrScanner from "qr-scanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Dummy employee data
const employeesData = [
  { id: "EMP001", name: "John Doe" },
  { id: "EMP002", name: "Jane Smith" },
  { id: "EMP003", name: "Bob Johnson" },
];

// Dummy attendance data
const initialAttendanceData = [
  { id: "EMP001", present: 3, absent: 2 },
  { id: "EMP002", present: 4, absent: 1 },
  { id: "EMP003", present: 2, absent: 3 },
];

export default function EmployeeAttendence() {
  const [scanning, setScanning] = useState(false);
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  useEffect(() => {
    if (scanning && videoRef.current) {
      qrScannerRef.current = new QrScanner(
        videoRef.current,
        (result) => {
          if (result) {
            const scannedId = result.data;
            markAttendance(scannedId, "present");
            setScanning(false);
          }
        },
        {
          returnDetailedScanResult: true,
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      qrScannerRef.current.start();

      return () => {
        if (qrScannerRef.current) {
          qrScannerRef.current.stop();
          qrScannerRef.current.destroy();
        }
      };
    }
  }, [scanning]);

  const markAttendance = (employeeId, status) => {
    setAttendanceData((prevData) =>
      prevData.map((employee) =>
        employee.id === employeeId
          ? { ...employee, [status]: employee[status] + 1 }
          : employee
      )
    );
  };

  const calculateAttendancePercentage = (present, absent) => {
    const total = present + absent;
    return total > 0 ? ((present / total) * 100).toFixed(2) : 0;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Attendance Dashboard</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>QR Code Scanner</CardTitle>
        </CardHeader>
        <CardContent>
          {scanning ? (
            <video ref={videoRef} style={{ width: "100%" }} />
          ) : (
            <Button onClick={() => setScanning(true)}>Start Scanning</Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Present</TableHead>
                <TableHead>Absent</TableHead>
                <TableHead>Attendance %</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((employee) => {
                const employeeInfo = employeesData.find(
                  (e) => e.id === employee.id
                );
                const attendancePercentage = calculateAttendancePercentage(
                  employee.present,
                  employee.absent
                );
                return (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employeeInfo?.name}</TableCell>
                    <TableCell>{employee.present}</TableCell>
                    <TableCell>{employee.absent}</TableCell>
                    <TableCell>{attendancePercentage}%</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        onClick={() => markAttendance(employee.id, "absent")}
                      >
                        Mark Absent
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
