import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Notion-like</h3>
            <p>&copy; 2023 Notion-like. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              <Facebook className="cursor-pointer hover:text-primary" />
              <Twitter className="cursor-pointer hover:text-primary" />
              <Instagram className="cursor-pointer hover:text-primary" />
              <Linkedin className="cursor-pointer hover:text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Mail className="mr-2" />
              <span>info@notion-like.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>123 Tech Street, San Francisco, CA</span>
            </div>
          </div>
        </div>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948534!3d37.75781499229416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652813309251!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  )
}