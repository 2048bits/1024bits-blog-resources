import { Controller } from './Controller';
import { serviceImpl } from '../business-logic';

// Inicjalizacja kontrolera
export const controller = new Controller(serviceImpl);
