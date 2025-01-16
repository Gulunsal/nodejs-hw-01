import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Mevcut iletişimleri oku
    const contacts = await readContacts();

    // Yeni bir iletişim bilgisi oluştur
    const newContact = createFakeContact();

    // Yeni iletişim bilgisini listeye ekle
    contacts.push(newContact);

    // Güncellenmiş listeyi dosyaya yaz
    await writeContacts(contacts);

    console.log('New contact added:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

// Fonksiyonu çalıştır
addOneContact();
