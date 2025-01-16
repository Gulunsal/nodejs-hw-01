import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    // Mevcut iletişim bilgilerini oku
    const contacts = await readContacts();

    // Eğer iletişim listesi boşsa işlem yapmadan geri dön
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    // Son iletişim bilgisini sil
    const removedContact = contacts.pop();

    // Güncellenmiş listeyi dosyaya yaz
    await writeContacts(contacts);

    console.log('Last contact removed:', removedContact);
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

// Fonksiyonu çalıştır
removeLastContact();
