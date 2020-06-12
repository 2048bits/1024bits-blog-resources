import { ServiceImpl } from './ServiceImpl';
import { repositoryImpl } from '../persistence';

// Inicjalizacja serwisu
export const serviceImpl = new ServiceImpl(repositoryImpl);
