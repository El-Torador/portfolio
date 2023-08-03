"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { EMAIL } from "@/lib/data";

export default function Contact({ dictionary }: { dictionary: Record<string, any> }) {
  const { ref } = useSectionInView("Contact");
  const refEmail = useRef<HTMLInputElement>(null)
  const refMessage = useRef<HTMLTextAreaElement>(null)

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{dictionary.title}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {dictionary.text1}{" "}
        <a className="underline" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>{" "}
        {dictionary.text2}.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          if(!formData.get('senderEmail')?.toString()) {
            toast.error(dictionary.emailMissing)
            return
          }

          if (!formData.get('message')?.toString()) {
            toast.error(dictionary.messageMissing)
            return
          }
          const { data: _, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(dictionary.successMessage);
          if (refEmail.current?.value) refEmail.current.value = ""
          if (refMessage.current?.value) refMessage.current.value = ""
        }}
      >
        <input
          ref={refEmail}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={dictionary.emailPlaceholder}
        />
        <textarea
          ref={refMessage}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={dictionary.messagePlaceholder}
          required
          maxLength={5000}
        />
        <SubmitBtn labelLang={dictionary.submitLabel} />
      </form>
    </motion.section>
  );
}
