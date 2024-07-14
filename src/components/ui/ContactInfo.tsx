import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Phone Number */}
          <div className="flex items-center">
            <FaPhoneAlt className="w-6 h-6 mr-3 text-gray-700" />
            <span className="text-gray-700">(123) 456-7890</span>
          </div>
          {/* Email Address */}
          <div className="flex items-center">
            <FaEnvelope className="w-6 h-6 mr-3 text-gray-700" />
            <span className="text-gray-700">info@example.com</span>
          </div>
          {/* Physical Address */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="w-6 h-6 mr-3 text-gray-700" />
            <span className="text-gray-700">123 Main St, Anytown, USA</span>
          </div>
        </div>
        {/* Google Map */}
        <div className="mb-8">
          <iframe
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093055!2d144.9559283158928!3d-37.817209742041716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e2f0d1f7%3A0xf5778ef7d5b1fc8b!2s123+Main+St%2C+Anytown%2C+USA!5e0!3m2!1sen!2sus!4v1631227486825!5m2!1sen!2sus"
            allowFullScreen={false}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <FaFacebook size={32} />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <FaTwitter size={32} />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <FaInstagram size={32} />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
