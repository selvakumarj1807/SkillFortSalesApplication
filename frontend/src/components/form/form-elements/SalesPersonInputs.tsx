import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import DatePicker from "../date-picker";

export default function SalesPersonInputs() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        aadhaar: "",
        dob: "",
        education: "",
        address: "",
        zone: "",
        password: "",
    });

    // Select Options
    const educationOptions = [
        { value: "10th", label: "10th" },
        { value: "12th", label: "12th" },
        { value: "diploma", label: "Diploma" },
        { value: "ug", label: "UG" },
        { value: "pg", label: "PG" },
    ];

    const zoneOptions = [
        { value: "Madhurai", label: "Madhurai" },
        { value: "Dindigul", label: "Dindigul" },
        { value: "Chennai", label: "Chennai" },
        { value: "Trichy", label: "Trichy" },
    ];

    // Handle Input Change
    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Submit Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);

        // 👉 API call here
    };

    return (
        <ComponentCard title="Add Sales Person">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Name */}
                    <div>
                        <Label>Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter full name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </div>

                    {/* Mobile */}
                    <div>
                        <Label>Mobile</Label>
                        <Input
                            type="tel"
                            placeholder="Enter mobile number"
                            value={formData.mobile}
                            onChange={(e) => handleChange("mobile", e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                    </div>

                    {/* Aadhaar */}
                    <div>
                        <Label>Aadhaar</Label>
                        <Input
                            type="text"
                            placeholder="Enter Aadhaar number"
                            value={formData.aadhaar}
                            onChange={(e) => handleChange("aadhaar", e.target.value)}
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <DatePicker
                            id="dob"
                            label="Date of Birth"
                            placeholder="Select DOB"
                            onChange={(_, dateString) =>
                                handleChange("dob", dateString)
                            }
                        />
                    </div>

                    {/* Education */}
                    <div>
                        <Label>Education</Label>
                        <Select
                            options={educationOptions}
                            placeholder="Select education"
                            onChange={(val) => handleChange("education", val)}
                        />
                    </div>

                    {/* Address - Textarea */}
                    <div className="md:col-span-2">
                        <Label>Address</Label>
                        <textarea
                            rows={3}
                            placeholder="Enter address"
                            value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
                        />
                    </div>

                    {/* Zone */}
                    <div>
                        <Label>Zone</Label>
                        <Select
                            options={zoneOptions}
                            placeholder="Select zone"
                            onChange={(val) => handleChange("zone", val)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                        />
                    </div>

                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </ComponentCard>
    );
}
