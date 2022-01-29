import ipfsClient from 'ipfs-http-client';

export const IPFSAdd = async (file) => {
    const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    const result = await ipfs.add(file);
    return result[0].hash;
};

//Get Files from IPFS
export const IPFSGet = async (hash) => {
    const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    const result = await ipfs.get(hash);
    return result[0].content;
}
