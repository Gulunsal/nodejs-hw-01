import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    // Mevcut iletişim bilgilerini oku
    const contacts = await readContacts();

    // İletişim listesinin uzunluğunu döndür
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);

    // Hata durumunda 0 döndür
    return 0;
  }
};

// Fonksiyonu çalıştır ve sonucu konsola yazdır
console.log(await countContacts());
