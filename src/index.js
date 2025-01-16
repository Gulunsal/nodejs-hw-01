import { createFakeContact } from './services/createFakeContact.js';
import { readContacts, writeContacts } from './services/contacts.js';

(async () => {
  // Mevcut iletişimleri oku
  const contacts = await readContacts();
  console.log('Existing Contacts:', contacts);

  // Yeni bir iletişim oluştur
  const newContact = createFakeContact();
  console.log('New Contact:', newContact);

  // Yeni iletişimi mevcut listeye ekle
  contacts.push(newContact);

  // Güncellenmiş iletişimleri dosyaya yaz
  await writeContacts(contacts);

  // Dosyadan yeniden oku
  const updatedContacts = await readContacts();
  console.log('Updated Contacts:', updatedContacts);
})();
