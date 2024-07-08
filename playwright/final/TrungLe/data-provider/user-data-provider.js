import { faker } from "@faker-js/faker";
import { accountFilePath } from '../constant/filePath_constant';
import fs from 'fs';
import path from 'path';

export class DataGenerator {
    //Generate random  username with letters and numbers
    static generateUsername() {
        let username = faker.internet.userName();
        username = username.toLowerCase().replace(/[^a-z]/g, '');
        const randomNumber = faker.number.int({ min: 1000, max: 9999 });
        return `${username}${randomNumber}`;
    }

    static updateUsername(newUsername) {
        const userDataPath = path.resolve(__dirname, accountFilePath);
        
        let userDataContent = fs.readFileSync(userDataPath, 'utf8');
        
        userDataContent = userDataContent.replace(/"username"\s*:\s*".*?"/, `"username": "${newUsername}"`);
        
        fs.writeFileSync(userDataPath, userDataContent, 'utf8');
    }
}