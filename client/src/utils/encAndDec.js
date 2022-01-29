import crypto from 'crypto';

export const encryptFile = (file, password) => {
    let iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', password, iv);
    let crypted = cipher.update(file, 'utf8', 'base64');
    crypted += cipher.final('base64');
    return crypted;
};

export const decryptFile = (file, password) => {
    let iv = crypto.randomBytes(16);
    const decipher = crypto.createDecipheriv('aes-256-cbc', password, iv);
    let decrypted = decipher.update(file, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
