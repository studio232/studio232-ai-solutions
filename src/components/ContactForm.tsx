import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your needs"),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert(values);
      
      if (error) throw error;
      
      toast.success("Thanks for reaching out! We'll be in touch within a few hours.");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="bg-white/10 text-black placeholder:text-gray-500" />
              </FormControl>
              <FormMessage className="text-red-200" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} className="bg-white/10 text-black placeholder:text-gray-500" />
              </FormControl>
              <FormMessage className="text-red-200" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Your phone number" {...field} className="bg-white/10 text-black placeholder:text-gray-500" />
              </FormControl>
              <FormMessage className="text-red-200" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Tell us about your business or challenges</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your business needs or challenges..."
                  className="min-h-[120px] bg-white/10 text-black placeholder:text-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-200" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
        <p className="text-sm text-center text-white/80 mt-4">
          We'll get back to you within a few hours
        </p>
      </form>
    </Form>
  );
};