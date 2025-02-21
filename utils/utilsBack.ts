import { v4 as uuidv4 } from 'uuid';

export function generateUniqueGuid(): string {
    const timestamp = Date.now(); // Timestamp en millisecondes
    const uniqueId = uuidv4(); // Génération d'un UUID
    return `${uniqueId}-${timestamp}`;
}
