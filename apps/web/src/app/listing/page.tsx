"use client";

import type React from "react";
import { useState } from "react";

function ListingPage() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("general");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!category) {
			setMessage("Kategori wajib dipilih!");
			return;
		}
		setMessage("Listing berhasil disubmit!");
	};

	return (
		<main className="mx-auto max-w-xl p-8">
			<h1 className="mb-4 text-2xl font-bold">Buat Listing Baru (F1)</h1>
			{message && <p className="mb-4 text-sm text-blue-600">{message}</p>}
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="mb-1 block text-sm font-medium">
						Judul Listing
					</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full rounded border p-2 text-black"
						placeholder="Masukkan judul listing..."
						required
					/>
				</div>
				<div>
					<label className="mb-1 block text-sm font-medium">
						Kategori (Validasi)
					</label>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className="w-full rounded border p-2 text-black"
					>
						<option value="general">Umum</option>
						<option value="property">Properti</option>
						<option value="service">Layanan</option>
					</select>
				</div>
				<div>
					<label className="mb-1 block text-sm font-medium">Deskripsi</label>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="w-full rounded border p-2 text-black"
						rows={4}
						placeholder="Tuliskan deskripsi lengkap..."
						required
					/>
				</div>
				<button
					type="submit"
					className="rounded bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
				>
					Simpan Listing
				</button>
			</form>
		</main>
	);
}

export default ListingPage;
