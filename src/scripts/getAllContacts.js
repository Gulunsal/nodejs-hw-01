import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    // Mevcut iletişim bilgilerini oku
    const contacts = await readContacts();

    // Tüm iletişim bilgilerini döndür
    return contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);

    // Hata durumunda boş bir dizi döndür
    return [];
  }
};

// Fonksiyonu çalıştır ve sonucu konsola yazdır
console.log(await getAllContacts());
