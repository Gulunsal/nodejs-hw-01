import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    // Boş bir dizi oluştur
    const emptyContacts = [];

    // Boş diziyi dosyaya yaz
    await writeContacts(emptyContacts);

    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

// Fonksiyonu çalıştır
removeAllContacts();
