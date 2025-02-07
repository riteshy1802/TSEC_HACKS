"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { baseUrl } from "@/App";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function PostJobPage() {
  const [jobData, setJobData] = useState({
    startDate: "",
    duration: "",
    requiredMembers: "",
    speciality: "",
    pricePerPerson: "",
    insuranceProvided: false,
    useGroupInsurance: false,
    location: "",
    transportOption: "none",
    hotspotLocation: "",
    description: "",
    title:"",
  });

  const [mapOpen, setMapOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const MapClickHandler = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedLocation({ lat, lng });
        // Update the location text area with coordinates
        setJobData((prev) => ({
          ...prev,
          location: `Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}`,
        }));
        setMapOpen(false);
      },
    });
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name) => {
    setJobData((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSelectChange = (name, value) => {
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Job Data:", jobData);
     const response = await fetch(`${baseUrl}/api/core/jobs/create/`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(jobData),
     });

  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <Card className="mx-auto bg-white shadow-xl">
        <CardHeader className="bg-[#17171a] text-white">
          <CardTitle className="text-2xl font-bold">Post a New Job</CardTitle>
          <CardDescription className="text-gray-300">
            Fill in the details to create a new job posting
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 mt-6">
            {/* Previous form fields remain the same */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="duration">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Title "
                  value={jobData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="About the Job "
                  value={jobData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={jobData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  name="duration"
                  placeholder="e.g., 3 months"
                  value={jobData.duration}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requiredMembers">Required Members</Label>
                <Input
                  id="requiredMembers"
                  name="requiredMembers"
                  type="number"
                  placeholder="Number of members"
                  value={jobData.requiredMembers}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="speciality">Speciality</Label>
                <Input
                  id="speciality"
                  name="speciality"
                  placeholder="Required speciality"
                  value={jobData.speciality}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerPerson">Price Per Person</Label>
                <Input
                  id="pricePerPerson"
                  name="pricePerPerson"
                  type="number"
                  placeholder="Price in Rs"
                  value={jobData.pricePerPerson}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2 flex  items-end">
                <Label className="pb-2" htmlFor="insuranceProvided">
                  Insurance Provided
                </Label>
                <div className="inline-block">
                  <Switch
                    className="ml-3"
                    id="insuranceProvided"
                    checked={jobData.insuranceProvided}
                    onCheckedChange={() =>
                      handleSwitchChange("insuranceProvided")
                    }
                  />
                </div>
              </div>
              {!jobData.insuranceProvided && (
                <>
                  <div className="flex flex-col space-y-2">
                    <div className="space-y-2 flex  items-center">
                      <Label className="pt-2" htmlFor="useGroupInsurance">
                        Use Group Insurance
                      </Label>
                      <Switch
                        className="ml-3"
                        id="useGroupInsurance"
                        checked={jobData.useGroupInsurance}
                        onCheckedChange={() =>
                          handleSwitchChange("useGroupInsurance")
                        }
                      />
                    </div>
                    {jobData.useGroupInsurance && (
                      <div className="space-y-2">
                        <Label htmlFor="groupInsurance">Group Insurance</Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("groupInsurance", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a group insurance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Group Insurance Plans</SelectLabel>
                              <SelectItem value="basic">
                                <div className="space-y-1">
                                  <div className="font-medium">
                                    Basic Group Coverage
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    $50,000 coverage • $20 co-pay • Basic dental
                                    & vision
                                  </div>
                                </div>
                              </SelectItem>

                              <SelectItem value="standard">
                                <div className="space-y-1">
                                  <div className="font-medium">
                                    Standard Family Plan
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    $100,000 coverage • $15 co-pay • Enhanced
                                    dental & vision • Prescription coverage
                                  </div>
                                </div>
                              </SelectItem>

                              <SelectItem value="premium">
                                <div className="space-y-1">
                                  <div className="font-medium">
                                    Premium Plus Protection
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    $250,000 coverage • $10 co-pay •
                                    Comprehensive dental & vision • Global
                                    coverage
                                  </div>
                                </div>
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="flex gap-3">
                <Textarea
                  id="location"
                  name="location"
                  placeholder="Site location or Google Maps link"
                  value={jobData.location}
                  onChange={handleInputChange}
                  className="min-h-[100px] resize-none rounded-xl border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                />

                <Button
                  type="button"
                  onClick={() => setMapOpen(true)}
                  variant="outline"
                  className="w-28 h-[100px] rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <MapPin className="h-6 w-10 text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">
                    Use Map
                  </span>
                </Button>
              </div>

              {/* Map Modal */}
              {mapOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-4 rounded-lg w-[800px]">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Select Location</h3>
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setMapOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </Button>
                    </div>
                    <div className="h-[400px] w-full rounded-lg overflow-hidden">
                      <MapContainer
                        center={[19.064333, 72.835833]}
                        zoom={16}
                        style={{ height: "100%", width: "100%" }}
                      >
                        <TileLayer
                          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                          subdomains="abcd"
                          maxZoom={20}
                        />
                        <MapClickHandler />
                        {selectedLocation && (
                          <Marker
                            position={[
                              selectedLocation.lat,
                              selectedLocation.lng,
                            ]}
                          />
                        )}
                      </MapContainer>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                      Click on the map to select a location
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Transport options section */}
            <div className="space-y-2">
              <Label>Transport Option</Label>
              <RadioGroup
                value={jobData.transportOption}
                onValueChange={(value) =>
                  handleSelectChange("transportOption", value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none">No Transport</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hotspot" id="hotspot" />
                  <Label htmlFor="hotspot">Provide Hotspot</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="provider" id="provider" />
                  <Label htmlFor="provider">Use Transport Provider</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Conditional fields based on transport option */}
            {jobData.transportOption === "hotspot" && (
              <div className="space-y-2">
                <Label htmlFor="hotspotLocation">Hotspot Location</Label>
                <Input
                  id="hotspotLocation"
                  name="hotspotLocation"
                  placeholder="Enter hotspot location"
                  value={jobData.hotspotLocation}
                  onChange={handleInputChange}
                />
              </div>
            )}

            {jobData.transportOption === "provider" && (
              <div className="space-y-2">
                <Label htmlFor="transportProvider">Transport Provider</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("transportProvider", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a transport provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="provider1">Provider 1</SelectItem>
                    <SelectItem value="provider2">Provider 2</SelectItem>
                    <SelectItem value="provider3">Provider 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-700"
            >
              Post Job
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
