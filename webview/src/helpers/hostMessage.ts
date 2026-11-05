export const isHostDocumentVersion = (value: unknown): value is number =>
  typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;

export const acceptHostDocumentVersion = (next: number, current: number): boolean => next >= current;
