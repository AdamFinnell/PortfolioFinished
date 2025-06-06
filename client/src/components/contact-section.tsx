import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "MESSAGE TRANSMITTED",
        description: "Your message has been successfully transmitted to the cyberdomain!",
        className: "bg-green-500/20 border-green-500 text-green-500",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "TRANSMISSION FAILED",
        description: error.message || "Failed to transmit message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL.send()",
      value: "alex.chen@cyberdomain.io",
      color: "cyber-blue",
      bgColor: "bg-primary/20",
      borderColor: "border-primary"
    },
    {
      icon: Linkedin,
      label: "LINKEDIN.connect()",
      value: "/in/alexchen-dev",
      color: "cyber-pink",
      bgColor: "bg-accent/20",
      borderColor: "border-accent"
    },
    {
      icon: Github,
      label: "GITHUB.clone()",
      value: "@alexchen-cybercoder",
      color: "cyber-purple",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="font-orbitron text-4xl md:text-5xl font-black text-center mb-16 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &lt;ESTABLISH_CONNECTION/&gt;
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="hologram-card p-8 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-orbitron text-2xl cyber-green mb-6">INITIALIZE_CONTACT.exe</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to collaborate on your next digital venture? Let's connect and build something extraordinary together. 
              Drop me a message and I'll get back to you faster than quantum entanglement.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 ${info.bgColor} ${info.borderColor} border rounded-lg flex items-center justify-center`}>
                    <info.icon className={`${info.color} h-5 w-5`} />
                  </div>
                  <div>
                    <p className={`${info.color} font-orbitron font-bold`}>{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="hologram-card p-8 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="cyber-blue font-orbitron text-sm">NAME.input()</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="bg-background border-primary/30 text-foreground focus:border-primary"
                          placeholder="Enter your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="cyber-pink font-orbitron text-sm">EMAIL.validate()</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          className="bg-background border-accent/30 text-foreground focus:border-accent"
                          placeholder="your@email.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="cyber-purple font-orbitron text-sm">PROJECT.describe()</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-purple-500/30 text-foreground focus:border-purple-500">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-application">Web Application</SelectItem>
                          <SelectItem value="mobile-app">Mobile App</SelectItem>
                          <SelectItem value="ai-ml-project">AI/ML Project</SelectItem>
                          <SelectItem value="blockchain-solution">Blockchain Solution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="cyber-green font-orbitron text-sm">MESSAGE.compile()</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          className="bg-background border-green-500/30 text-foreground focus:border-green-500 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full cyber-button py-3 font-orbitron font-bold"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "TRANSMITTING..." : "TRANSMIT_MESSAGE"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
