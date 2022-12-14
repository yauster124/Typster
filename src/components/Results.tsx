import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helpers";

const Results = ({
    errors,
    accuracy,
    total,
    className,
}: {
    errors: number;
    accuracy: number;
    total: number;
    className?: string;
}) => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { duration: 0.3 };

    return (
        <motion.ul
            className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
        >
            <motion.li
                initial={initial}
                animate={animate}
                className="text-xl font-semibold"
                transition={{ ...duration, delay: 0 }}
            >
                Results
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 0.5 }}
            >
                Accuracy: {formatPercentage(accuracy)}
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                className="text-red-500"
                transition={{ ...duration, delay: 1 }}
            >
                Errors: {errors}
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 1.5 }}
            >
                Typed: {total}
            </motion.li>

        </motion.ul>
    );
};

export default Results;
