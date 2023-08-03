import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class IndexedDbService extends Dexie {
  constructor() {
    super('myIndexedDB'); // Name of your IndexedDB database
    this.version(1).stores({
      tableName: '++id, columnName1, columnName2, ...', // Define your tables and columns here
    });
  }

  // Method to add a new record to the database
  async addItem(table: string, item: any): Promise<void> {
    try {
      await this[table].add(item);
      console.log('Item added successfully');
    } catch (error) {
      console.error('Error adding item', error);
    }
  }

  // Method to get all records from a table
  async getAllItems(table: string): Promise<any[]> {
    try {
      const items = await this[table].toArray();
      return items;
    } catch (error) {
      console.error('Error getting items', error);
      return [];
    }
  }

  // Method to get a record by its ID
  async getItemById(table: string, id: any): Promise<any> {
    try {
      const item = await this[table].get(id);
      return item;
    } catch (error) {
      console.error('Error getting item', error);
      return null;
    }
  }

  // Method to update a record in the database
  async updateItem(table: string, id: any, updates: any): Promise<void> {
    try {
      await this[table].update(id, updates);
      console.log('Item updated successfully');
    } catch (error) {
      console.error('Error updating item', error);
    }
  }

  // Method to delete a record from the database
  async deleteItem(table: string, id: any): Promise<void> {
    try {
      await this[table].delete(id);
      console.log('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item', error);
    }
  }
}
