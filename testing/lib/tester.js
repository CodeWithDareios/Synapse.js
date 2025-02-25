
//Type definitions
/**
 * @typedef {any} testInput - The value to be tested
 * @typedef {any} expectedTestResult - The expected value of the input
 * 
 * @typedef {Object} testReport
 * @property {"Result: passed✅" | "Result: failed❌"} DISPLAY
 * @property {any} RESULT
 * @property {boolean} PASSED
 * @property {any} EXPECTED
 * 
 * @typedef {Readonly<testReport>} testingResult - A report from the test
 */

/**
 * Performs a specific test in a unit
 * @param {testInput} input 
 * @param {expectedTestResult} expected 
 * @returns {testingResult}
 */
export const Test = (input, expected) => {

    return Object.freeze({
        DISPLAY: `Result: ${(input == expected) ? 'passed✅' : 'failed❌'}`,
        RESULT: input,
        PASSED: (input == expected),
        EXPECTED: expected
    });

}

/**
 * - Represents a unit you want to test.
 * - For running the main script, use: deno run script.js [change script.js to actual file name] 
 * @param  {...testingResult} tests
 * @param {String} unitName 
 */
export const Unit = (unitName ,...tests) => {

    const testingResults = [...tests];

    let failedCount = 0;
    let passed = true;
    let fails = [];
 
    const outprint = [
        `Test Results for Unit ${unitName}:`,
        '\n'
    ];
    
    for (let i = 0; i < testingResults.length; i++) {

        if (!testingResults[i].PASSED) passed = false, failedCount++, fails.push(i);
        outprint.push(`    Test ${i + 1}: ${testingResults[i].DISPLAY};`);

    }
    const failedPercentage = Math.floor(((100 / tests.length) * failedCount) * 100) / 100;
    
    outprint.push('\n');
    outprint.push(`Unit test: ${passed ? 'passed✅' : 'failed❌'}. Success rate: ${100 - failedPercentage}%`)
    outprint.forEach(text => {console.log(text)});

    if (!passed) {
        console.log('\n');
        console.log(`Failures:\n`)
        for (let i = 0; i < fails.length; i++) {
            console.log(`Test No. ${fails[i] + 1}: `)
            console.log(`   Expected: ${testingResults[fails[i]].EXPECTED},`);
            console.log(`   Recieved: ${testingResults[fails[i]].RESULT},`)
        }
    }

}