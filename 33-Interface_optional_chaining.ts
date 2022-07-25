/*
**
**      [optional chaining]
**
**
*/

const fetchUserdata = {
    name: 'u1',
    id: 'u1',
    job: { title: 'CEO', desc: 'Own company' }
}

console.log(fetchUserdata?.job?.title)

/* nullish coalescing */

const userinput = ''

const storedData = userInput ?? 'Default'; // output: ''