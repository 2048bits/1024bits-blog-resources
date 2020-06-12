import { ElementDTO } from './ElementDTO';

// Entity zawierające logikę biznesową
export class Element {
  private readonly id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public changeName(newName: string): void {
    this.name = newName;
  }

  public toDTO() {
    return new ElementDTO(this.id, this.name);
  }
}
