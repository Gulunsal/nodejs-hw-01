import fs from 'fs-extra'; // Dosya işlemleri için fs-extra kütüphanesi
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    // JSON verisini düzenli bir formatta dosyaya yazma
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('Contacts successfully written to the file.');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
