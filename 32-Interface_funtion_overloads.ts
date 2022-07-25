


/*
**
**      [function voerloads]
**
**
**
*/

// [overloads]

function add32(a: number, b: number): number;
function add32(a: string, b: string): string;
function add32(a: number, b: string): string;
function add32(a: string, b: number): string;

function add32(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add32('Max', "Schwarz");

