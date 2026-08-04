import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mesh-dark relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-page relative text-center">
        <motion.p
          className="font-display text-7xl font-bold text-brand-400 sm:text-8xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.p>
        <motion.h1
          className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          That page is not on our syllabus
        </motion.h1>
        <motion.p
          className="mx-auto mt-4 max-w-md text-navy-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The link may be old or mistyped. Head back to the homepage, or jump straight to the exam
          catalogue.
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back to home
          </Link>
          <Link to="/exams" className="btn-outline">
            Browse exams <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
