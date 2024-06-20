// import React from 'react';
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// type ProfileFormProps = {};

// const profileFormSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

// const ProfileForm: React.FC<ProfileFormProps> = () => {
//   const { handleSubmit, control } = useForm<z.infer<typeof profileFormSchema>>({
//     resolver: zodResolver(profileFormSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   const onSubmit: SubmitHandler<z.infer<typeof profileFormSchema>> = (data) => {
//     console.log(data);
//   };

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//       <form className="space-y-8">
//         <FormField
//           control={control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter username" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// type ContactFormProps = {
//   form: ReturnType<typeof useForm>;
// };

// const contactFormSchema = z.object({
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   message: z.string().min(10, {
//     message: "Message must be at least 10 characters.",
//   }),
// });

// const ContactForm: React.FC<ContactFormProps> = ({ form }) => {
//   const { handleSubmit, control } = form;

//   const onSubmit: SubmitHandler<z.infer<typeof contactFormSchema>> = (data) => {
//     console.log(data);
//   };

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//       <form className="space-y-8">
//         <FormField
//           control={control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={control}
//           name="message"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Message</FormLabel>
//               <FormControl>
//                 <textarea rows={4} placeholder="Enter your message" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Send Message</Button>
//       </form>
//     </Form>
//   );
// };

// const ContactForm: React.FC = () => {
//   const profileForm = useForm<z.infer<typeof profileFormSchema>>({
//     resolver: zodResolver(profileFormSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-8">Profile Form</h1>
//       <ProfileForm />

//       <h1 className="text-3xl font-bold mt-8 mb-8">Contact Form</h1>
//       <ContactForm form={profileForm} />
//     </div>
//   );
// };

// export default ContactFormn;


import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    // Example: Send form data to server or perform validation
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-red-500 mb-6 text-center">Contact Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="your@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
