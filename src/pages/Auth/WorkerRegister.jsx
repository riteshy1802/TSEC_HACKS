import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";



export default function ConstructionWorkerLogin() {
  const [step, setStep] = useState(1);
  const [aadhaar, setAadhaar] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (step === 1) {
      // Validate Aadhaar and phone number
      if (aadhaar.length !== 12 || !/^\d+$/.test(aadhaar)) {
        setError("Please enter a valid 12-digit Aadhaar number");
        return;
      }
      if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        setError("Please enter a valid 10-digit phone number");
        return;
      }
      // Move to OTP verification step
      setStep(2);
      // In a real application, you would trigger the OTP sending process here
    } else {
      // Verify OTP
      if (otp.length !== 6 || !/^\d+$/.test(otp)) {
        setError("Please enter a valid 6-digit OTP");
        return;
      }
      // Mock OTP verification
      if (otp === "123456") {
        alert("Login successful!");
        // Here you would typically redirect the user or update the app state
      } else {
        setError("Invalid OTP. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center flex-col-reverse min-h-screen ">
      <Card className="w-[400px] border-none shadow-none">
        <CardHeader>
          <CardTitle>Worker Login</CardTitle>
          <CardDescription>
            {step === 1 ? "Enter your details" : "Verify your phone number"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="aadhaar">Aadhaar Number</Label>
                    <Input
                      id="aadhaar"
                      placeholder="Enter your 12-digit Aadhaar number"
                      value={aadhaar}
                      onChange={(e) => setAadhaar(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your 10-digit phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  placeholder="Enter the 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <CardFooter className="flex justify-between mt-4 px-0">
              {step === 2 && (
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
              )}
              <Button type="submit" className="ml-auto">
                {step === 1 ? "Next" : "Verify & Login"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
      <div className="imgWrapper  md:mr-10  md:h-72">
        <img
          src="https://res.cloudinary.com/dydo4df9g/image/upload/v1738139429/hfbvx7i5ryv5pkyb3rd3.png"
          alt=""
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
