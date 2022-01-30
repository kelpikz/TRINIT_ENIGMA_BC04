import React from "react";
import clsx from "clsx";
import CryptoJS from "crypto-js";
import * as openpgp from "openpgp";

export const encryptFile = (file, password) => {
	const fileReader = new FileReader();

	fileReader.readAsArrayBuffer(file);
	return new Promise((resolve, reject) => {
		fileReader.onload = () => {
			console.log(fileReader);
			var wordArray = CryptoJS.lib.WordArray.create(fileReader.result);
			// console.log(wordArray.toString());
			// console.log(wordArray);
			// resolve(encrypted);
			resolve(wordArray.toString());
		};
		fileReader.onerror = (error) => {
			reject(error);
		};
	});
};

const encryptWithGivenKey = async (keys, payload) => {
	const publicKey = await openpgp.readKey({ armoredKey: keys.publicKey });

	const privateKey = await openpgp.decryptKey({
		privateKey: await openpgp.readPrivateKey({ armoredKey: keys.privateKey }),
		passphrase: "password",
	});

	const encrypted = await openpgp.encrypt({
		message: await openpgp.createMessage({ text: payload }),
		encryptionKeys: publicKey,
	});
	console.log(encrypted);

	const message = await openpgp.readMessage({
		armoredMessage: encrypted, // parse armored message
	});

	const data = await openpgp.decrypt({
		message,
		decryptionKeys: privateKey,
	});

	console.log(data);
	return data;
};

const genKeys = (userData) => {
	return new Promise((resolve, reject) => {
		openpgp
			.generateKey({
				userIDs: [userData],
				curve: "ed25519",
				passphrase: "password",
				format: "armored",
			})
			.then(function (key) {
				// console.log(key);
				resolve(key);
			})
			.catch((err) => reject(err));
	});
};

export const RSA = () => {
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		console.log("Submitting form", e.target[0].files[0]);
		const data = await encryptFile(e.target[0].files[0]);

		const aliceKeys = await genKeys({
			name: "alice",
			email: "alice@can.do",
		});
		// eslint-disable-next-line no-unused-vars
		const _bobKeys = await genKeys({
			name: "bob",
			email: "bob@cant.do",
		});

		// console.log(aliceKeys);
		const data1 = await encryptWithGivenKey(aliceKeys, data);

		console.log(data === data1.data);
	};
	return (
		<>
			<h1 className="text-3xl">Upload come</h1>
			<form action="" className="w-3/6" onSubmit={onSubmitHandler}>
				<label
					className={clsx(
						"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					)}
					htmlFor="user_avatar"
				>
					Upload file
				</label>
				<input
					className={clsx(
						"block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border",
						" border-gray-300 cursor-pointer",
						"focus:outline-none focus:border-transparent"
					)}
					aria-describedby="user_avatar_help"
					id="user_avatar"
					type="file"
					required
				/>
				<div
					className="mt-1 text-sm text-gray-500 dark:text-gray-300"
					id="user_avatar_help"
				>
					Upload some file
				</div>
				<button
					className={clsx(
						"p-4 bg-accent-1 rounded-lg font-bold text-text mt-5",
						"text-text-accent-1 hover:bg-accent-2"
					)}
				>
					Submit
				</button>
			</form>
		</>
	);
};
