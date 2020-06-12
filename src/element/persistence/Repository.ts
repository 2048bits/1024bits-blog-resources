import { ElementData } from './ElementData';

// Abstrakcja dla repozytorium
export abstract class Repository {
  public abstract async getById(id: string): Promise<ElementData>;
  public abstract async save(name: string): Promise<void>;
  // ...
}
