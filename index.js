require('dotenv').config()
const server = require('./api/server')

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`Server up at port ${port}`)
})

// console.log('hello world');
// console.log('bye');

// function f() {
//     console.log(1);
//     console.log(2);
//     //step over line in current block

//     f()
// }

/**
 * "console": "integratedTerminal" //affects below terminal, not stuck in debug cons, can split 
 * 
 * Exceptions
 * present in most modern langs
 * allow you to handle errors anywhere!
 * 
 * give you more power than just if elsing an instance of Error, result
 * 
 * ex, control flow fn
 * exceptional control flow, didn't exprect this to be input
 * 
 * throw new Error('a should be 1 or 2')
 * fn does not return at all!
 * 
 * will see stack trace
 * 
 * can catch exceptions!
 * try {
 *      some()
 *  }    catch (error) {
        clog('i got an exception: error.message) * 
 *  }
 */


/**
 * sync - in sequence
 * async - opB might be kicked off before opA is complete
 * any operation that takes time to complete
 * 
 * return new Promise(resolve =< {
 *      setTimeout(resolve, reject, 1000)
 * })
 * 
 * reading from files in node is async
 * 
 * 
 * function thing()
 *  return after1S()
 *      .then
 *      .then(clog 42)
 * 
 * async await - elegant way to use promises
 * await only works inside of an async function, other than that use .then
 * 
 * //automatically return a promise
 * //no .catch method
 * async function thing() {
 *  try  {
 *      await after1SecondPromise();
 *      console.log('it worked')
 *      return 42
 *      }
 *     catch(err)
 *  }
 * 
 * thing()
 */

