import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";
import { Pencil, Trash2 } from "lucide-react";


interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export default function UsersTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState<number | "All">(5);

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [editUser, setEditUser] = useState<User | null>(null);

    // Fetch Users
    const fetchUsers = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/auth/users?role=User");
            const data = await res.json();
            if (data.success) setUsers(data.users);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Delete
    const handleDelete = async (id: string) => {
        if (!window.confirm("Delete user?")) return;

        await fetch(`http://localhost:8000/api/auth/user/${id}`, {
            method: "DELETE",
        });

        fetchUsers();
    };

    // Open Modal + Load User
    const handleUpdate = async (id: string) => {
        try {
            const res = await fetch(
                `http://localhost:8000/api/auth/user/${id}`
            );
            const data = await res.json();

            setEditUser(data.user);
            setShowModal(true);
        } catch {
            alert("Failed to load user");
        }
    };

    // Input Change
    const handleChange = (field: string, value: string) => {
        if (!editUser) return;
        setEditUser({ ...editUser, [field]: value });
    };

    // Save Update
    const handleSave = async () => {
        if (!editUser) return;

        try {
            const res = await fetch(
                `http://localhost:8000/api/auth/user/${editUser._id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        firstName: editUser.firstName,
                        lastName: editUser.lastName,
                        email: editUser.email,
                    }),
                }
            );

            if (!res.ok) throw new Error();

            alert("User Updated Successfully ✅");
            setShowModal(false);
            fetchUsers();
        } catch {
            alert("Update failed");
        }
    };

    // Filter Users
    const filteredUsers = users.filter((u) =>
        `${u.firstName} ${u.lastName} ${u.email}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // Pagination Logic
    const perPage =
        usersPerPage === "All" ? filteredUsers.length : usersPerPage;

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentUsers =
        usersPerPage === "All"
            ? filteredUsers
            : filteredUsers.slice(indexOfFirst, indexOfLast);

    const totalPages =
        usersPerPage === "All"
            ? 1
            : Math.ceil(filteredUsers.length / perPage);

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                {/* 🔍 Search + Page Size */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4">

                    <input
                        type="text"
                        placeholder="Search users..."
                        className="border px-3 py-2 rounded w-full md:w-72
        text-gray-800 dark:text-white
        placeholder-gray-400 dark:placeholder-white
        bg-white dark:bg-gray-800"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                    />

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-700 dark:text-white">Rows:</span>

                        <select
                            value={usersPerPage}
                            onChange={(e) => {
                                const value =
                                    e.target.value === "All"
                                        ? "All"
                                        : Number(e.target.value);
                                setUsersPerPage(value);
                                setCurrentPage(1);
                            }}
                            className="border px-2 py-1 rounded
            text-gray-800 dark:text-white
            bg-white dark:bg-gray-800"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value="All">All</option>
                        </select>
                    </div>
                </div>

                {/* TABLE */}

                <Table>

                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">First Name</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Last Name</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Email</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Action</TableCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {loading ? (
                            <TableRow>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Loading...</TableCell>
                            </TableRow>
                        ) : currentUsers.length === 0 ? (
                            <TableRow>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">No Users Found</TableCell>
                            </TableRow>
                        ) : (
                            currentUsers.map((user) => (
                                <TableRow key={user._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{user.firstName}</TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{user.lastName}</TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{user.email}</TableCell>

                                    <TableCell className="px-5 py-4 flex flex-wrap gap-2">

                                        {/* Update Button */}
                                        <button
                                            onClick={() => handleUpdate(user._id)}
                                            className="flex items-center justify-center p-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                                            title="Update User"
                                        >
                                            <Pencil size={18} />
                                        </button>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="flex items-center justify-center p-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
                                            title="Delete User"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                    </TableCell>

                                </TableRow>
                            ))
                        )}
                    </TableBody>

                </Table>


                {/* MODAL */}
                {
                    showModal && editUser && (
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-xl w-[90%] md:w-[400px]">

                                <h2 className="text-lg font-semibold mb-4">Update User</h2>

                                <input
                                    className="border p-2 w-full mb-3"
                                    value={editUser.firstName}
                                    onChange={(e) => handleChange("firstName", e.target.value)}
                                />

                                <input
                                    className="border p-2 w-full mb-3"
                                    value={editUser.lastName}
                                    onChange={(e) => handleChange("lastName", e.target.value)}
                                />

                                <input
                                    className="border p-2 w-full mb-4"
                                    value={editUser.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                />

                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-gray-400 text-white rounded"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleSave}
                                        className="px-4 py-2 bg-green-600 text-white rounded"
                                    >
                                        Save
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                }

                {/* PAGINATION */}
                <div className="flex flex-wrap justify-center items-center gap-2 px-4 py-4">

                    {/* Prev */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className="
            px-3 py-1 border rounded
            disabled:opacity-40
            text-gray-800 dark:text-white
            bg-white dark:bg-gray-800
            border-gray-300 dark:border-gray-600
            hover:bg-gray-100 dark:hover:bg-gray-700
            transition
        "
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`
                px-3 py-1 border rounded text-sm transition
                border-gray-300 dark:border-gray-600

                ${currentPage === i + 1
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                }
            `}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className="
            px-3 py-1 border rounded
            disabled:opacity-40
            text-gray-800 dark:text-white
            bg-white dark:bg-gray-800
            border-gray-300 dark:border-gray-600
            hover:bg-gray-100 dark:hover:bg-gray-700
            transition
        "
                    >
                        Next
                    </button>

                </div>


                {/* Showing Info */}
                <p className="text-center text-sm text-gray-500 pb-4">
                    Showing {filteredUsers.length === 0 ? 0 : indexOfFirst + 1} —
                    {Math.min(indexOfLast, filteredUsers.length)} of{" "}
                    {filteredUsers.length}
                </p>

            </div >

        </div>
    );
}
