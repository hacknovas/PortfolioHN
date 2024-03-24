"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function SlideTemplate({ children }: { children: React.ReactNode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        // once: true
    })

    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ overflow: "hidden" }} >
            <motion.div
                variants={{
                    hidden: { top: "-1000px", left: "-100px", position: "relative", opacity: "0.4", fontSize: "x-large" },
                    visible: { left: "0", top: "0", opacity: "1", fontSize: "large" },
                }}

                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.9 }}
                style={{
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
