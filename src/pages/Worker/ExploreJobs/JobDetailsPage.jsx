import { useState } from 'react'
import { Star, MapPin, Phone, MessageCircle, Shield, Map, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import googleMap from "../../../assets/workers/google_map.svg";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function JobDetails() {
    const [bidAmount, setBidAmount] = useState('')

    const job = useSelector((state)=>state.jobDetails);

    const navigate = useNavigate();

    const handleNavigationToJobDetails = () => {
        navigate('/worker/explore-jobs');
    }

    return (
        <div className="container mx-auto py-8">
            <Card className="max-w-3xl mx-auto">
                <div className='m-4 w-[100%] flex inline-block'>
                    <div className='cursor-pointer border border-[#c7c7c7] hover:bg-[#d1d1d1] transition duration-200 rounded p-1' onClick={handleNavigationToJobDetails}>
                        <ArrowLeft className='cursor-pointer' color='#3d3d3d' strokeWidth={1.5}/>
                    </div>
                </div>
                <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-16 h-16 rounded-full" />
                    <div>
                    <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
                    <p className="text-muted-foreground">{job.company}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{job.rating}</span>
                    <span className="text-muted-foreground">({job.reviews} reviews)</span>
                </div>
                </CardHeader>
                <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span>{job.location}</span>
                    <Badge variant="secondary">{job.distance}</Badge>
                    <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" asChild>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${job.mapCoordinates}`} target="_blank" rel="noopener noreferrer">
                                <Map className="h-4 w-4" />
                            </a>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>View on Map</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" asChild>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${job.mapCoordinates}`} target="_blank" rel="noopener noreferrer">
                                <img className='w-6' src={googleMap} alt='Google Map'/>
                            </a>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>View on Google Map</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </div>
                    <Badge variant="outline">{job.postedTime}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <Label className="text-muted-foreground">Salary</Label>
                    <p className="font-semibold">{job.salary}</p>
                    </div>
                    <div>
                    <Label className="text-muted-foreground">Duration</Label>
                    <p className="font-semibold">{job.startDate} to {job.endDate}</p>
                    </div>
                    <div>
                    <Label className="text-muted-foreground">Start Date</Label>
                    <p className="font-semibold">{job.startDate}</p>
                    </div>
                    <div>
                    <Label className="text-muted-foreground">Openings</Label>
                    <p className="font-semibold">{job.openings}</p>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Job Description</h3>
                    <p>{job.description}</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Responsibilities</h3>
                    <ul className="list-disc pl-5 space-y-1">
                    {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Required Safety Gear</h3>
                    <div className="flex flex-wrap gap-2">
                    {job.safetyGear.map((gear, index) => (
                        <Badge key={index} variant="secondary">{gear}</Badge>
                    ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Insurance</h3>
                    <div className="flex items-center space-x-2">
                    <Shield className={`w-5 h-5 ${job.insurance.provided ? 'text-green-500' : 'text-red-500'}`} />
                    <span>{job.insurance.provided ? 'Provided' : 'Not Provided'}</span>
                    </div>
                    {job.insurance.provided && (
                    <p className="mt-1 text-sm text-muted-foreground">{job.insurance.plan}</p>
                    )}
                </div>

                <div className="flex justify-between items-center">
                    <div>
                    <h3 className="font-semibold mb-2">Employer Contact</h3>
                    <div className="flex space-x-4">
                        <Button variant="outline" size="sm" asChild>
                        <a href={`tel:${job.employerContact.phone}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                        </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                        <a href={`https://wa.me/${job.employerContact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp
                        </a>
                        </Button>
                    </div>
                    </div>
                    <div className="space-x-4">
                    <Dialog>
                        <DialogTrigger asChild>
                        <Button variant="outline">Bid</Button>
                        </DialogTrigger>
                        <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Place Your Bid</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                            <Label htmlFor="bid-amount">Bid Amount (₹)</Label>
                            <Input
                                id="bid-amount"
                                type="number"
                                placeholder="Enter your bid amount"
                                value={bidAmount}
                                onChange={(e) => setBidAmount(e.target.value)}
                            />
                            </div>
                            <Button className="w-full" onClick={() => console.log('Bid placed:', bidAmount)}>
                            Submit Bid
                            </Button>
                        </div>
                        </DialogContent>
                    </Dialog>
                    <Button>Apply Now</Button>
                    </div>
                </div>
                </CardContent>
            </Card>
        </div>
    )
}
