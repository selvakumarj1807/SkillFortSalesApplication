import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { useNavigate } from "react-router-dom";

export default function SalesPersonInputs() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "User@123", // default password
    };

    const [formData, setFormData] = useState(initialState);

    // Handle Input Change
    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Submit Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const response = await fetch(
                "https://skillfortsalesapp.onrender.com/api/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        role: "User",
                        ...formData,
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Sales Person Create failed");
            }

            alert("Sales Person Created Successfully ✅");

            // ✅ Clear Form
            setFormData(initialState);

            // optional redirect
            navigate("/addSalesPerson");

        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ComponentCard title="Add Sales Person">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    <div>
                        <Label>First Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={(e) => handleChange("firstName", e.target.value)}
                        />
                    </div>

                    <div>
                        <Label>Last Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={(e) => handleChange("lastName", e.target.value)}
                        />
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                    </div>

                    <div>
                        <Label>Password</Label>
                        <Input
                            type="text"
                            value={formData.password}
                            disabled
                            className="bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`rounded-lg px-6 py-2.5 text-sm font-medium text-white transition
                        ${loading
                            ? "bg-gray-400 cursor-not-allowed opacity-60"
                            : "bg-brand-500 hover:bg-brand-600"
                        }`}
                    >
                        {loading ? "Submit..." : "Submit"}
                    </button>
                </div>
            </form>
        </ComponentCard>
    );
}
