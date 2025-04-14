
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceID = "service_1mqwy5a"; // 👈 replace
    const templateID = "template_qos3jlw"; // 👈 replace
    const publicKey = "C7NXqPcarK1UD8zKr"; // 👈 replace

    // Simulate form submission
    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again.");
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "nazerhussain1999@gmail.com",
      link: "mailto:nazerhussain1999@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+91 86677 53339",
      link: "+91 86677 53339",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Chennai TamilNadu",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">Let's Connect</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 border border-primary/10 bg-secondary/30 card-hover"
              >
                <a
                  href={info.link}
                  className="flex items-start space-x-4 no-underline text-foreground"
                >
                  <div className="bg-background p-3 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{info.title}</h3>
                    <p className="text-foreground/70 break-all">{info.value}</p>
                  </div>
                </a>
              </Card>
            ))}

            <div className="mt-8 pt-8 border-t border-primary/10">
              <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nazerhussain86"
                  target="_blank"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Github"
                >
                  <Github size={20} />
                </a>
                <a
                  href="www.linkedin.com/in/nazerhussain"
                  target="_blank"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="mailto:nazerhussain1999@gmail.com"
                  target="_blank"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border border-primary/10 bg-secondary/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Mail ID"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-shine rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
