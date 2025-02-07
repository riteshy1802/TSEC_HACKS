import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {Dialog,DialogContent, DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { schemes } from "./schemes.js";

export default function GovernmentSchemes() {
    const [selectedScheme, setSelectedScheme] = useState(null);

    const handleDialogClose = () => {
    setSelectedScheme(null);
    };

    return (
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
        Government Schemes for Construction Workers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {schemes.map((scheme) => (
        <Card key={scheme.id} className="flex flex-col">
            <CardHeader>
            <CardTitle>{scheme.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
            <p className="mb-4">{scheme.overview}</p>
            <Dialog>
                <DialogTrigger asChild>
                <Button
                    onClick={() => setSelectedScheme(scheme)}
                    className="w-full bg-blue-500 text-white hover:bg-blue-600"
                >
                    Learn More
                </Button>
                </DialogTrigger>
            </Dialog>
            </CardContent>
        </Card>
        ))}
    </div>

      {/* Persistent Dialog for Selected Scheme */}
    <Dialog open={selectedScheme !== null} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-3xl transition-all duration-300 ease-in-out">
            <DialogHeader>
            <DialogTitle>{selectedScheme?.title}</DialogTitle>
            {/* <Button
            onClick={handleDialogClose}
            className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
            X
            </Button> */}
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] mt-4">
            <div className="space-y-4">
            <section>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p>{selectedScheme?.overview}</p>
            </section>
            <section>
                <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                    {selectedScheme?.benefits?.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h3 className="text-lg font-semibold mb-2">How to Apply</h3>
                <p>{selectedScheme?.howToApply}</p>
            </section>
            {selectedScheme?.applicationLink && (
                <section>
                <h3 className="text-lg font-semibold mb-2">Apply Here</h3>
                <a
                    href={selectedScheme.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    {selectedScheme.applicationLink}
                </a>
                </section>
            )}
            </div>
        </ScrollArea>
        </DialogContent>
    </Dialog>
    </div>
    );
}
