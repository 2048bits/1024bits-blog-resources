import { Service } from '../business-logic/Service';

// Klasa zawierająca implementacje kontrolera
export class Controller {
  constructor(
    private readonly service: Service,
  ) {}

  public async getById(id: string): Promise<string> {
    const element = await this.service.getById(id);

    return JSON.stringify(element);
  }

  public async save(name: string): Promise<void> {
    await this.service.createNewElement(name);
  }
}
