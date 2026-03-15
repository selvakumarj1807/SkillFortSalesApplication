import { useModal } from "../../hooks/useModal";
import {
    //ArrowDownIcon,
    ArrowUpIcon,
    BoxIconLine,
    GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function EcommerceMetrics() {
    const { isOpen, openModal, closeModal } = useModal();


    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
            {/* <!-- Metric Item Start --> */}
            <div
                onClick={openModal}
                className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5
                 hover:shadow-lg transition duration-300
                 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                    <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
                </div>


                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Quick Enquiry Form
                        </span>
                    </div>
                </div>
            </div>
            {/* <!-- Metric Item End --> */}

            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                    <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
                </div>

                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Student Ref
                        </span>
                        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                            3,782
                        </h4>
                    </div>
                    <Badge color="success">
                        <ArrowUpIcon />
                        11.01%
                    </Badge>
                </div>
            </div>
            {/* <!-- Metric Item End --> */}

            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                    <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
                </div>
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Sale Products
                        </span>
                        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                            5,359
                        </h4>
                    </div>

                    <Badge color="error">
                        <ArrowUpIcon />
                        9.05%
                    </Badge>
                </div>
            </div>
            {/* <!-- Metric Item End --> */}

            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                    <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
                </div>
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Orders
                        </span>
                        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                            5,359
                        </h4>
                    </div>

                    <Badge color="success">
                        <ArrowUpIcon />
                        9.05%
                    </Badge>
                </div>
            </div>
            {/* <!-- Metric Item End --> */}

            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
                <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">

                    <form className="flex flex-col" >
                        <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
                            <div className="mt-7">


                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Your Name</Label>
                                        <Input
                                            type="text"
                                            name="fullName"


                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Mobile</Label>
                                        <Input
                                            type="text"
                                            name="mobile"

                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Preferred Time to Call</Label>

                                        <div className="flex gap-3">
                                            {/* Date */}
                        

                                            {/* Time (12 Hour Format) */}
                                            <select
                                                name="callTime"
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
      focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <option value="">Select Time</option>
                                                <option>9Am - 2Pm</option>
                                                <option>2Pm - 7Pm</option>
                                                <option>7Pm - 9Pm</option>
                                            
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={closeModal}>
                                Close
                            </Button>
                            <Button size="sm">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>


    );
}
