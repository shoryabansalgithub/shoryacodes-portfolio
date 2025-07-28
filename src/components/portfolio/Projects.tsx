import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DesignProjects } from "./DesignProjects";
import { DevelopmentProjects } from "./DevelopmentProjects";
import { LandingPages } from "./LandingPages";

export const Projects = () => {
  return (
    <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-8">
      <div className="max-w-lg w-full">
        <div className="space-y-6">
          <h1 className="font-display text-lg md:text-xl font-medium mb-6 px-4">
            Projects
          </h1>
          
          <div className="px-4">
            <Tabs defaultValue="development" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="designs">Designs</TabsTrigger>
                <TabsTrigger value="landing-pages">Landing Pages</TabsTrigger>
              </TabsList>
              
              <TabsContent value="development" className="mt-6">
                <DevelopmentProjects />
              </TabsContent>
              
              <TabsContent value="designs" className="mt-6">
                <DesignProjects />
              </TabsContent>
              
              <TabsContent value="landing-pages" className="mt-6">
                <LandingPages />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}; 