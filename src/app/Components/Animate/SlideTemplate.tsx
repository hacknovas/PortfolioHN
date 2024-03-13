"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true
    })

    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}

                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0, background: "var(--brand)",
                    zIndex: 20
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
