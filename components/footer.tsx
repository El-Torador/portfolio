import { getDictionary } from "@/app/[lang]/dictionaries";
import React from "react";

export default async function Footer({ lang }: { lang: string }) {
  const dict = await getDictionary(lang);
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} JK. {dict.footer.copyright}.
      </small>
      <p className="text-xs">
        <span className="font-semibold">{dict.footer.title}:</span> {dict.footer.stack}.
      </p>
    </footer>
  );
}
