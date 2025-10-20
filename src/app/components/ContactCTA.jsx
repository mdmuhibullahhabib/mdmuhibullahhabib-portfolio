"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Let&apos;s Build Something Together
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6 text-lg md:text-xl"
      >
        Interested in working together? Feel free to reach out!
      </motion.p>
      <Link
        href="/contact"
        className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
      >
        Contact Me
      </Link>
    </section>
  );
}
