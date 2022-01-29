import { create } from 'ipfs-http-client';
import { decryptFile } from './encAndDec';

const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export const IPFSAdd = async (file) => {
    console.log(file);
    const result = await ipfs.add(file);
    console.log(result);
    return result.path;
};

//Get Files from IPFS
export const IPFSGet = async (hash) => {
    await fetch(`https://ipfs.infura.io/ipfs/${hash}`)
        .then(res => res.arrayBuffer())
        .then(buf => {
            // convert to file
            const file = new File([buf], 'file.txt', { type: 'text/plain' });
            decryptFile(file, 'password').then(decryptedFile => {
                console.log(decryptedFile);
            }
            );
        });

};

