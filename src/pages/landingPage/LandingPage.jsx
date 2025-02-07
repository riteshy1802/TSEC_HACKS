import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { AlertCircle, Bell, Building2, CheckCircle, HardHat, MapPin, Star, Truck, Users } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import bg from '../../assets/landing-bg.jpeg'

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between text-black">
        <Link className="flex items-center" href="#">
          <HardHat className="h-6 w-6" />
          <span className="ml-2 font-semibold">Sahayak</span>
        </Link>
        <nav className="flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Explore Jobs</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" onClick={() => navigate('/worker')}>How It Works</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" onClick={() => navigate('/worker')}>For Workers</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" onClick={() => navigate('/employer')}>For Employers</Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12">
  <div className="container px-8 md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center lg:flex-row lg:justify-between">
      <div className="space-y-2 lg:w-1/2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Connecting Construction Workers with Opportunities
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Empower your career in construction. Find jobs, arrange transport, and build your future with
          ConstructConnect.
        </p>
        <div className="space-x-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div> 
      <div className="lg:w-1/2 mt-8 ml-4 lg:mt-0 p-4">
        <img src={bg} alt="Construction Worker" className="w-full h-auto" />
      </div>
    </div>
  </div>
</section>


        {/* Key Features Section */}
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-12">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 mb-2 text-green-500" />
                  <CardTitle>Robust Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ensuring authenticity and security for both workers and employers.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Bell className="h-10 w-10 mb-2 text-blue-500" />
                  <CardTitle>Dynamic Job Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Instant job openings tailored to your skills and location with real-time alerts.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Truck className="h-10 w-10 mb-2 text-purple-500" />
                  <CardTitle>Transport Arrangement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Simplified logistics with ride-sharing and local transport partnerships.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-yellow-500" />
                  <CardTitle>NGO Training Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access training to enhance your skills and platform usage.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 mb-2 text-orange-500" />
                  <CardTitle>Income Tracking & Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Log your income, track payments, and rate employers for transparency.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="h-10 w-10 mb-2 text-red-500" />
                  <CardTitle>Location-Based Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Find jobs near you, reducing travel time and increasing opportunities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bonus Features Section */}
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-12">Bonus Features</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <AlertCircle className="h-10 w-10 mb-2 text-red-500" />
                  <CardTitle>Emergency Fund Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access emergency funds during accidents or crises, ensuring support for medical and livelihood needs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building2 className="h-10 w-10 mb-2 text-blue-500" />
                  <CardTitle>Team Bidding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Form teams to bid collectively on larger projects, expanding your work opportunities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Ready to Transform Your Career?</h2>
            <p className="text-lg max-w-[600px] mx-auto mb-8">Join ConstructConnect today and unlock a world of opportunities in the construction industry.</p>
            <div className="space-x-4">
              <Button size="lg">Sign Up Now</Button>
              <Button size="lg" variant="outline">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ConstructConnect. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
