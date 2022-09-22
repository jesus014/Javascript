"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteClass = void 0;
class EstudianteClass {
    addItem(newItem) {
        console.log('new Item', { newItem });
    }
    deleteItem(Id) {
        console.log(Id);
    }
    getItems() {
        throw new Error('Method not implemented.');
    }
    getNames() {
        throw new Error('Method not implemented.');
    }
}
exports.EstudianteClass = EstudianteClass;
