import { Service } from './Service';
import { Repository } from '../persistence/Repository';
import { ElementDTO } from './ElementDTO';
import { Element } from './Element';

// Implementacja serwisu
export class ServiceImpl implements Service {
  constructor(
    private readonly repository: Repository,
  ) {}

  public async getById(id: string): Promise<ElementDTO> {
    // Logika biznesowa
    const element = await this.repository.getById(id);

    return new Element(element.id, element.name).toDTO()
  }

  public async createNewElement(name: string): Promise<void> {
    // Logika biznesowa
    await this.repository.save(name);
  }
}
