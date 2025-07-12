import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import resumePdf from "@assets/Sarwesh_Resume_1752258083677.pdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormData) => {
    // Create mailto link with form data
    const emailSubject = encodeURIComponent(data.subject);
    const emailBody = encodeURIComponent(
      `Hi Sarwesh,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n\nBest regards,\n${data.name}`
    );
    const mailtoLink = `mailto:sarweshkhairnar@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Opening email client...",
      description: "Your email client will open with the message pre-filled.",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Let's collaborate on technology and innovation to create a brighter and smarter world
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-gradient-to-br from-navy to-blue-900 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-gold mr-4" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-200">sarweshkhairnar@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gold mr-4" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-blue-200">+91 7709436123</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-gold mr-4" size={20} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-blue-200">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Professional Links */}
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-navy mb-6">Professional Links</h3>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/sarweshkhairnar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <FaLinkedin className="text-blue-600 text-2xl mr-4" />
                    <div>
                      <p className="font-medium text-navy">LinkedIn</p>
                      <p className="text-charcoal text-sm">Connect professionally</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Sarwesh2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <FaGithub className="text-gray-800 text-2xl mr-4" />
                    <div>
                      <p className="font-medium text-navy">GitHub</p>
                      <p className="text-charcoal text-sm">View my projects</p>
                    </div>
                  </a>
                  <a
                    href={resumePdf}
                    download="Sarwesh_Khairnar_Resume.pdf"
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Download className="text-gold text-2xl mr-4" />
                    <div>
                      <p className="font-medium text-navy">Download Resume</p>
                      <p className="text-charcoal text-sm">PDF format</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-light-gray">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-navy mb-6">Send Me a Message</h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="Your Name"
                      className="focus:ring-navy focus:border-navy"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="your.email@example.com"
                      className="focus:ring-navy focus:border-navy"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      {...form.register("subject")}
                      placeholder="Subject"
                      className="focus:ring-navy focus:border-navy"
                    />
                    {form.formState.errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={5}
                      placeholder="Your message here..."
                      className="resize-none focus:ring-navy focus:border-navy"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-navy hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <Send className="mr-2" size={16} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
