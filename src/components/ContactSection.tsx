
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-engineer-600 hover:bg-engineer-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-engineer-600 dark:text-engineer-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        Phone
                      </p>
                      <a
                        href="tel:+254757694637"
                        className="text-gray-600 dark:text-gray-400 hover:text-engineer-600 dark:hover:text-engineer-400"
                      >
                        +254 757 694 637
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-engineer-600 dark:text-engineer-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        Email
                      </p>
                      <a
                        href="mailto:vallaryachiengokumu@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-engineer-600 dark:hover:text-engineer-400 break-all"
                      >
                        vallaryachiengokumu@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-engineer-600 dark:text-engineer-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        Location
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Eldoret, Uasin Gishu County, Kenya
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div id="cv" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  Resume / CV
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Download my detailed resume to learn more about my education,
                  work experience, and skills.
                </p>
                <Button className="bg-engineer-600 hover:bg-engineer-700">
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
