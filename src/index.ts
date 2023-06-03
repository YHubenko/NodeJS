// Task 1
async function runSequent<T, R>(array: T[], callback: (item: T, index: number) => Promise<R>): Promise<R[]> {
    const results: R[] = [];
    for (let i = 0; i < array.length; i++) {
        const result = await callback(array[i], i);
        results.push(result);
    }
    return results;
}
const array1 = ["one", "two", "three"];
runSequent(array1, async (item, index) => {
    return {
        item,
        index,
    };
}).then((results) => {
    console.log("Task 1:");
    console.log(results);
    console.log("==========================");
});

// Task 2
function arrayChangeDelete<T>(array: T[], rule: (item: T) => boolean): T[] {
    const deletedElements: T[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
        if (rule(array[i])) {
            deletedElements.unshift(array[i]);
            array.splice(i, 1);
        }
    }
    return deletedElements;
}
const array2 = [1, 2, 3, 6, 7, 9];
const deletedElements = arrayChangeDelete(array2, (item) => item % 2 === 0);
console.log("Task 2:");
console.log(array2); // [1, 3, 7, 9]
console.log(deletedElements); // [2, 6]
console.log("==========================");

// Task 5
type EventHandler = () => void;

class MyEventEmitter {
    private eventHandlers: { [event: string]: EventHandler[] };

    constructor() {
        this.eventHandlers = {};
    }

    registerHandler(event: string, handler: EventHandler) {
        if (!(event in this.eventHandlers)) {
            this.eventHandlers[event] = [];
        }

        this.eventHandlers[event].push(handler);
    }

    emitEvent(event: string) {
        const handlers = this.eventHandlers[event];

        if (handlers) {
            handlers.forEach((handler) => handler());
        }
    }
}

const emitter = new MyEventEmitter();
emitter.registerHandler('userUpdated', () => {
    console.log("Task 5:")
    console.log("User account updated");
    console.log("==========================");
});
emitter.emitEvent('userUpdated'); // Обліковий запис користувача оновлено