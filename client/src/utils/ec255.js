import CryptoJS from "crypto-js";
import * as openpgp from "openpgp";

const getFileReaderWordArray = (file) => {
	const fileReader = new FileReader();

	fileReader.readAsArrayBuffer(file);
	return new Promise((resolve, reject) => {
		fileReader.onload = () => {
			console.log(fileReader);
			var wordArray = CryptoJS.lib.WordArray.create(fileReader.result);
			resolve(wordArray.toString());
		};
		fileReader.onerror = (error) => {
			reject(error);
		};
	});
};

export const generateKeys = () => {
	const userData = {
		name: "alice",
		email: "alice@can.do",
	};
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

// Encrypts msg given public key
const encryptWithGivenKey = async (publicKey, payload) => {
	const publicKeyParsed = await openpgp.readKey({ armoredKey: publicKey });

	const encrypted = await openpgp.encrypt({
		message: await openpgp.createMessage({ text: payload }),
		encryptionKeys: publicKeyParsed,
	});
	console.log(encrypted);

	return encrypted;
};

// Encrypts the given file with the given public key
export const encryptFileWithGivenKeys = async (file, publicKey) => {
	const fileStream = await getFileReaderWordArray(file);
	return await encryptWithGivenKey(fileStream);
};
