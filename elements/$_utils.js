
/**
 * Type definitions
 * @typedef {number|bigint} randomFragmentID 
 */


/**
 * 
 * @returns {randomFragmentID}
 */
export const generateFragmentID = () => {

    return ((Math.random() * 100) * Math.random()) * Math.pow(10, Math.random().toString().length)

}