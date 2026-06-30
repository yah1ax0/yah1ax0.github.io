// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Button } from "./ui/button";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_29gi57n",     // from EmailJS dashboard
//         "template_tf9s5jt",    // from EmailJS template
//         formData,
//         "D54hWzeCDaCg6zuAp"      // from EmailJS account
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           alert("Failed to send message: " + error.text);
//         }
//       );
//   };

//   return (
// <div>

// <div className="bg-slate-100 rounded-xl min-w-[800px]">
//     <form onSubmit={sendEmail} className="p-6">
//         <label for="name">Full name:</label><br/>
//         <Input placeholder="Enter your full name" type="text" id="name" name="name" className="w-full bg-slate-50"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         /><br/>
//         <label for="lname">Email:</label><br/>
//         <Input placeholder="Enter your email"
//          type="email" id="email" name="email" className="w-full bg-slate-50"
//           value={formData.email}
//           onChange={handleChange}
//           required
//          /><br/>

//         <label for="lname">message:</label><br/>
//         <Textarea placeholder="Enter your message"
//          id="message" name="message" className="w-full bg-slate-50"
//           value={formData.message}
//           onChange={handleChange}
//          /><br />

//         <Button type="submit" className="w-full">Send Message</Button>
//     </form>
// </div>

// </div>
//   );
// };

