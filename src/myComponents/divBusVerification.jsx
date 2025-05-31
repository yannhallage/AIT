import { motion } from "framer-motion";

const DivBusVerification = () => {
    return (
        <>
            <motion.div className="bg-white max-h-[80vh] overflow-y-auto p-5 shadow-lg rounded-xl border border-gray-300 w-auto max-w-xs min-w-[10rem]"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <h3 className="text-sm font-semibold mb-2">📌 Actions</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li className="hover:text-black cursor-pointer">Option 1</li>
                    <li className="hover:text-black cursor-pointer">Option 2</li>
                    <li className="hover:text-black cursor-pointer">Option 3</li>
                    <li className="hover:text-black cursor-pointer">Option 4</li>
                    <li className="hover:text-black cursor-pointer">Option 5</li>
                    <li className="hover:text-black cursor-pointer">Option 6</li>
                    <li className="hover:text-black cursor-pointer">Option 7</li>
                    <li className="hover:text-black cursor-pointer">Option 8</li>
                    <li className="hover:text-black cursor-pointer">Option 9</li>
                    <li className="hover:text-black cursor-pointer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias, esse facere tempore provident quaerat nam quisquam accusantium, libero laboriosam praesentium veritatis eaque doloremque, corporis voluptas voluptate nisi architecto cupiditate.
                    </li>
                </ul>
            </motion.div>
        </>
    )
}
export default DivBusVerification;