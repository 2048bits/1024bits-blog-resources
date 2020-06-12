import { ElementDTO } from './ElementDTO';

// Abstrakcja dla serwisu
export abstract class Service {
  abstract async getById(id: string): Promise<ElementDTO>
  abstract async createNewElement(name: string): Promise<void>
}
