import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronRight, Calendar } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Keys to Effective Leadership in 2025",
      description: "Discover the essential traits that define successful leaders in today's dynamic business environment.",
      date: "Coming Soon"
    },
    {
      title: "How AI is Transforming Goal Achievement",
      description: "Learn how artificial intelligence is revolutionizing the way we set, track, and accomplish our goals.",
      date: "Coming Soon"
    },
    {
      title: "Building High-Performance Teams",
      description: "Practical strategies for creating teams that consistently deliver exceptional results.",
      date: "Coming Soon"
    }
  ];

  return (
    <div>
      <div className="bg-card py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="breadcrumb">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Blog</span>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8" data-testid="text-blog-title">
            Insights & Articles
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-blog-${index}`}>
                <CardHeader>
                  <CardTitle className="font-heading" data-testid={`text-blog-title-${index}`}>
                    {post.title}
                  </CardTitle>
                  <CardDescription data-testid={`text-blog-description-${index}`}>
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span data-testid={`text-blog-date-${index}`}>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
