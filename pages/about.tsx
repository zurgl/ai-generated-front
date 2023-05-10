import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Button = () => {
  return (
    <div className="m-8">
      <div className="flex items-center justify-center h-28">
        <div className="relative">
          <div
            className="
              absolute -inset-1 rounded-lg opacity-75 blur 
              bg-gradient-to-r from-black via-blue-700 to-lime-900
              dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"
          ></div>
          <button className="relative rounded-lg bg-black px-7 py-4 text-xl text-yellow-50">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

// input[type=number]::-webkit-inner-spin-button,
// input[type=number]::-webkit-outer-spin-button {
//   opacity: 1;
// }

const ScaleInput = ({ input, setInput }: { input: number; setInput: any }) => {
  return (
    <div className="bg-slate-100 p-2">
      <label className="flex flex-col items-start">
        <span className="text-gray-700 font-semibold underline my-1">
          Scale
        </span>
        <input
          id="scale"
          name="scale"
          type="number"
          className="h-8 w-16 p-2"
          required
          onChange={(e) => {
            e.preventDefault;
            setInput(e.target.value);
          }}
          value={input}
        />
      </label>
    </div>
  );
};

const AnimatedList = () => {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  return (
    <motion.ul animate="hidden" variants={list}>
      <motion.li variants={item} />
      <motion.li variants={item} />
      <motion.li variants={item} />
    </motion.ul>
  );
};

const AnimatedBox = ({ input }: { input: number }) => {
  console.log(input);
  console.log(input / 2);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: input }}
      transition={{ duration: 0.5 }}
      className="w-[200px] h-[200px] bg-cyan-600 rounded-full"
    />
  );
};

export default function About() {
  const [input, setInput] = useState(0);
  return (
    <div className="h-[calc(100vh_-_172px)] overflow-hidden w-screen bg-slate-200 dark:bg-black">
      <div className="flex justify-center items-center">
        <div className="w-9/12 h-5/6 flex justify-center items-center">
          <ScaleInput input={input} setInput={setInput} />
          <Button />
          <AnimatedBox input={input} />
          <AnimatedList />
        </div>
      </div>
    </div>
  );
}
