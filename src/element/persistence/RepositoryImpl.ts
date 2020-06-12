import { Repository } from './Repository';
import { ElementData } from './ElementData';

// Implementacja repozytorium
export class RepositoryImpl implements Repository {
  public async getById(id: string): Promise<ElementData> {
    // Logika odpowiadająca za wyciągnięcie elementu z bazy
    return {
      id: 'test',
      name: 'test'
    }
  }

  public async save(name: string): Promise<void> {
    // Logika odpowiadająca za zapis do bazy
  }

  // ...
}
