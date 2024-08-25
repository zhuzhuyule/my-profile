import Nedb from '@seald-io/nedb';

export interface Database<T> {
  find(query: Partial<T>): Promise<T[]>;
  findOne(query: Partial<T>): Promise<T | null>;
  insert(item: T): Promise<T>;
  update(query: Partial<T>, update: Partial<T>, options?: Nedb.UpdateOptions): Promise<number>;
  remove(query: Partial<T>, options?: Nedb.RemoveOptions): Promise<number>;
}

export class NeDBDatabase<T extends { _id?: string }> implements Database<T> {
  private db: Nedb<T>;

  constructor(filename?: string) {
    this.db = new Nedb({ filename: `../db/${filename}.json`, autoload: true });
  }

  find(query: Partial<T>): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.find(query, (err: any, docs: T[]) => {
        if (err) reject(err);
        else resolve(docs);
      });
    });
  }

  findOne(query: Partial<T>): Promise<T | null> {
    return new Promise((resolve, reject) => {
      this.db.findOne(query, (err, doc) => {
        if (err) reject(err);
        else resolve(doc || null);
      });
    });
  }

  insert(item: T): Promise<T> {
    return new Promise((resolve, reject) => {
      this.db.insert(item, (err, newDoc) => {
        if (err) reject(err);
        else resolve(newDoc);
      });
    });
  }

  update(query: Partial<T>, update: Partial<T>, options: Nedb.UpdateOptions = {}): Promise<number> {
    return new Promise((resolve, reject) => {
      this.db.update(query, { $set: update }, options, (err, numAffected) => {
        if (err) reject(err);
        else resolve(numAffected);
      });
    });
  }

  remove(query: Partial<T>, options: Nedb.RemoveOptions = {}): Promise<number> {
    return new Promise((resolve, reject) => {
      this.db.remove(query, options, (err, numRemoved) => {
        if (err) reject(err);
        else resolve(numRemoved);
      });
    });
  }
}
