import { useState } from "react";
import { Play, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { freeVideos, videoCategories, type VideoData } from "@/data/videos";

import FloatingButtons from "@/components/FloatingButtons";

const FreeCourse = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = selectedCategory === "All" 
    ? freeVideos 
    : freeVideos.filter(video => video.category === selectedCategory);

  const handleVideoClick = (video: VideoData) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Free Trading Course
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Learn forex trading fundamentals with our comprehensive free video series. 
              Start your trading journey with professional guidance from VFDN experts.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Play className="w-4 h-4 text-primary" />
                {freeVideos.length} Free Videos
              </span>
              <span>•</span>
              <span>Beginner Friendly</span>
              <span>•</span>
              <span>No Sign-up Required</span>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Filter className="w-5 h-5 text-muted-foreground mt-1 mr-2" />
              {videoCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <Card 
                  key={video.id} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
                  onClick={() => handleVideoClick(video)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-primary/90 rounded-full p-3">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {video.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {video.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredVideos.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  No videos found
                </h3>
                <p className="text-muted-foreground">
                  Try selecting a different category to see more videos.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Ready for Advanced Training?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take your trading skills to the next level with our comprehensive paid courses 
              and personalized mentorship programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                View Paid Courses
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={handleCloseModal}
          videoId={selectedVideo.youtubeId}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
};

export default FreeCourse;