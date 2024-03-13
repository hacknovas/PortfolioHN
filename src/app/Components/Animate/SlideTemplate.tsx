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
                    hidden: { left: "-100%", position: "relative" },
                    visible: { left: 0 },
                }}

                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.7, ease: "easeIn" }}
                style={{
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
