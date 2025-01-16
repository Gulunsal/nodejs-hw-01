import fs from 'fs-extra'; // Dosya işlemleri için fs-extra kütüphanesi
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    // Dosyayı okuma
    const data = await fs.readFile(PATH_DB, 'utf8');

    // Eğer dosyada veri yoksa boş bir dizi döndür
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error reading contacts:', error);

    // Hata durumunda boş bir dizi döndür
    return [];
  }
};
