"use client";

import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
   InputOTP,
   InputOTPGroup,
   InputOTPSlot,
} from "@/components/ui/input-otp";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { db } from "@/firebase/firebaseConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
   alive: z.string().min(2, {
      message: "bta do",
   }),
   girl: z.string().min(2, {
      message: "bta do naaa",
   }),
   attractive: z.string().min(2, {
      message: "pls bta do naa",
   }),
   chocolate: z.string().min(2, {
      message: "aree bas ek bar bta do",
   }),
   girlfriend: z.string().min(2, {
      message:
         "ab sab tumare upar hai, jitna time lena hai le lo par sachi sachi btana",
   }),
   name: z.string().min(2, {
      message: "aree bta do, kya hi kar lunga tumare naam se mai",
   }),
   phonenumber: z.string().min(10, {
      message:
         "dekho mujhe pta hai ki tumhe bhi ek boy firend chahiye, kyu na mai hu ban jau, ek bar muaka to de ke dekho",
   }),
   dehej: z.number().min(1000000, {
      message: "minimum 10 lakh toh do",
   }),
});

export default function Home() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         alive: "",
         girl: "",
         attractive: "",
         chocolate: "",
         girlfriend: "",
         name: "",
         phonenumber: "",
      },
   });

   const [open, setOpen] = useState(false);

   function onSubmit(values: z.infer<typeof formSchema>) {
      addDoc(collection(db, "girls"), values);
      if (typeof window !== "undefined") {
         localStorage.setItem("already?", "yes");
      }
   }

   // if (localStorage.getItem("already?")) {
   //    return (
   //       <Dialog open={true}>
   //          <DialogContent>
   //             <DialogHeader>
   //                <DialogTitle className="items-center flex flex-col">
   //                   Chalo Chalo hogya, ab 404yuv404 ke replay ka wait karo
   //                   <Image
   //                      src={"/rickroll-roll.gif"}
   //                      className="rounded-lg"
   //                      width={200}
   //                      height={200}
   //                      alt=""
   //                   />
   //                </DialogTitle>
   //                <DialogDescription>Hogya</DialogDescription>
   //             </DialogHeader>
   //          </DialogContent>
   //       </Dialog>
   //    );
   // }
   return (
      <div className="flex md:px-16 py-10 px-5 items-center flex-col">
         <h1 className="text-xl font-semibold pb-10">
            404yuv404's Girls Application of "Will you be my Girlfirend?"
         </h1>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="space-y-5 w-full max-w-[500px]"
            >
               <FormField
                  control={form.control}
                  name="alive"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Are you alive?</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Are you alive?" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value="Yes">Yess</SelectItem>
                              <SelectItem value="No">
                                 Nahi hum toh mjhe lene aye hai
                              </SelectItem>
                           </SelectContent>
                        </Select>
                        <FormDescription>Jinda ho tum?</FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="girl"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Are you a girl?</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Are you a girl?" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value="Yes">Haa bilkul</SelectItem>
                              <SelectItem value="No">
                                 Nahi jii hum toh gay hai
                              </SelectItem>
                           </SelectContent>
                        </Select>
                        <FormDescription>aree ladki hoo?</FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="attractive"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Am i attractive?</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Am i attractive?" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value="Yes">Haa bilkul</SelectItem>
                              <SelectItem value="Yes">Ek dum</SelectItem>
                           </SelectContent>
                        </Select>
                        <FormDescription>aree handsome hu?</FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="chocolate"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Do you like Chocolate?</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Do you like Chocolate?" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value="Yes">
                                 Mujhe bhot pasand Chocolate
                              </SelectItem>
                              <SelectItem value="Ok">
                                 Mtlb mujhe utna bhi pasand nhi hai lekin kha
                                 leti hu
                              </SelectItem>
                              <SelectItem value="No">
                                 Nhi mujhe bilkul pasand nhi hai
                              </SelectItem>
                           </SelectContent>
                        </Select>
                        <FormDescription>dairy milk kahti ho?</FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Your name</FormLabel>
                        <FormControl>
                           <Input placeholder="Naam btao" {...field} />
                        </FormControl>
                        <FormDescription>Naam Naam</FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="girlfriend"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="flex flex-col justify-items-center text-xl font-semibold w-full">
                           Will you be my Girlfirend? 🥹{" "}
                           <p className="ml-[248px] text-sm flex">👉👈</p>
                        </FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Will you be my Girlfirend?" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value="Yes">Haa bilkul</SelectItem>
                              <SelectItem value="No">
                                 Nhi mujhe nhi banna
                              </SelectItem>
                           </SelectContent>
                        </Select>
                        <FormDescription>
                           areee bandi bano gi meri?
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="phonenumber"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Give me ur Phone Number?</FormLabel>
                        <FormControl>
                           <InputOTP maxLength={10} {...field}>
                              <InputOTPGroup className="w-full">
                                 <InputOTPSlot className="h-9 w-9" index={0} />
                                 <InputOTPSlot className="h-9 w-9" index={1} />
                                 <InputOTPSlot className="h-9 w-9" index={2} />
                                 <InputOTPSlot className="h-9 w-9" index={3} />
                                 <InputOTPSlot className="h-9 w-9" index={4} />
                                 <InputOTPSlot className="h-9 w-9" index={5} />
                                 <InputOTPSlot className="h-9 w-9" index={6} />
                                 <InputOTPSlot className="h-9 w-9" index={7} />
                                 <InputOTPSlot className="h-9 w-9" index={8} />
                                 <InputOTPSlot
                                    className="h-9 w-9 border-r"
                                    index={9}
                                 />
                              </InputOTPGroup>
                           </InputOTP>
                        </FormControl>
                        <FormDescription>
                           Phone number btao yaar
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="dehej"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>How much Dhej can you give me?</FormLabel>
                        <FormControl>
                           <Input
                              type="number"
                              placeholder="For example, 6969696 or 42020420"
                              {...field}
                           />
                        </FormControl>
                        <FormDescription>
                           aree katana dhej de skti ho?
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit">Submit</Button>
            </form>
         </Form>

         <h2 className="pt-10 font-semibold">
            This abomination is made by{" "}
            <a
               href="https://github.com/yuvu404"
               target="_blank"
               className="hover:underline text-blue-400 cursor-pointer"
            >
               Yuvraj404
            </a>
         </h2>
      </div>
   );
}

