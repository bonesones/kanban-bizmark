import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  drawerRef: React.RefObject<HTMLDivElement | null>;
};

export const Drawer = ({ children, isOpen, drawerRef }: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={drawerRef}
          variants={{
            hidden: { x: "100%" },
            visible: { x: 0 },
            exit: { x: "100%" },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
            duration: 0.3,
          }}
          className="fixed right-0 top-0 bottom-0 z-1000 bg-white h-screen w-214.5 overflow-hidden shadow-lg"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
