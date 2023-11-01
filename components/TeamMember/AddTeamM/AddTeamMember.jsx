"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// async function createMemeber({ name, img, about }) {
//     const res = await fetch("/api/teammembers", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, img, about }),
//     });
//     if (res.ok) {
//         const teamMember = await res.json();
//         return teamMember;
//     }
// }

export default function AddTeamMember() {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [about, setAbout] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/teammembers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, img, about }),
        });
        if (res.ok) {
            const teamMember = await res.json();
            // return teamMember;

        }
        router.push("/team");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg ml-6">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block text-gray-700 text-s font-bold mb-2"
                    >Name
                        <input
                            autoComplete="on"
                            name="name"
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className="appearance-none block w-72 bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </label>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block text-gray-700 text-s font-bold mb-2"

                    >
                        Profile Picture
                        <input
                            name="img"
                            value={img}
                            type="text"
                            onChange={(e) => setImg(e.target.value)}
                            className="appearance-none block w-72 bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </label>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block text-gray-700 text-s font-bold mb-2"
                    >
                        About
                        <textarea
                            name="about"
                            value={about}
                            type="text"
                            onChange={(e) => setAbout(e.target.value)}
                            className="appearance-none block w-72 bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </label>
                </div>
            </div>
            <button type="submit" className="mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Create Team Member
            </button>
        </form>
    );
}
