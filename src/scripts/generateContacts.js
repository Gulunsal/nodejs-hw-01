import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    // Mevcut iletişim bilgilerini oku
    const contacts = await readContacts();

    // Belirtilen sayıda rastgele iletişim bilgisi oluştur ve listeye ekle
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    // Güncellenmiş listeyi dosyaya yaz
    await writeContacts(contacts);

    console.log(`${number} new contacts have been added.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

// Fonksiyonu çalıştır
generateContacts(5);
