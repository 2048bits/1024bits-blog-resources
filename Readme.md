# Przykład architektury warstwowej

W folderze `src` znajduje się moduł przykładowy moduł `element` w którym zastosowaliśmy architekturę warstwową.
W tym przypadku jest ona wykorzystywana do podziału odpowiedzialności. Jest to przykład architektury trójwarstwowej, która zawiera warstwę prezentacji, logiki biznesowej oraz persystencji.

**Warstwa prezentacji**

W niej znajdują się kontrolery odpowiedzialne za obsługę zapytań i odpowiedzi.

**Warstwa logiki biznesowe**

Znajduje się w niej logika biznesowa.

**Warstwa persystencji**

Odpowiada za zapis i odczyt naszych danych.

## Komendy
1. `npm run build` - skrypt budujący aplikację
2. `npm run start` - skrypt odpalający aplikację
