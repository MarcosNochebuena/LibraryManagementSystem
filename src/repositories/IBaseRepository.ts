export interface IBaseRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: string | number): Promise<T | null>;
  add(entity: T): Promise<void>;
  update(id: string | number, entity: T): Promise<void>;
  delete(id: string | number): Promise<void>;
}
