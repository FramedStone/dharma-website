import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          We're on a mission to make collaboration easier and more intuitive. Our Notion-like platform 
          brings together the best of note-taking, project management, and team collaboration tools.
        </p>
        <div className="text-center">
          <Button variant="outline" size="lg">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}