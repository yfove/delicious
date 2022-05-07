import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Breakfast from "../components/Breakfast";
import { motion } from "framer-motion";

import React from "react";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Breakfast />
      <Popular />
    </motion.div>
  );
}

export default Home;
