import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  const features = [
    { title: "Collaborative Workspace", description: "Work together in real-time with your team" },
    { title: "Customizable Templates", description: "Start quickly with pre-built templates for any project" },
    { title: "Powerful Integrations", description: "Connect with your favorite tools seamlessly" }
  ]

  return (
    <section id="features" className="min-h-screen flex items-center bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}