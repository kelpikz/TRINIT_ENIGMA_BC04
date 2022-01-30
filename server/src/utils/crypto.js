import SHA256 from 'crypto-js/sha256';

export const sha256 = (str) => {
    return SHA256(str).toString();
}