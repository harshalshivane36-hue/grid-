// Function to check if a single number is prime
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }
    
    // 2 is the only even prime number
    if (num === 2) {
        return true;
    }
    
    // Even numbers (except 2) are not prime
    if (num % 2 === 0) {
        return false;
    }
    
    // Check odd divisors up to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Function to find all prime numbers up to a given limit
function findPrimes(limit) {
    const primes = [];
    
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    
    return primes;
}

// Function to find the first N prime numbers
function findFirstNPrimes(count) {
    const primes = [];
    let num = 2;
    
    while (primes.length < count) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    
    return primes;
}

// Function to find prime numbers using Sieve of Eratosthenes (more efficient for large ranges)
function sieveOfEratosthenes(limit) {
    if (limit < 2) return [];
    
    // Create a boolean array and initialize all entries as true
    const isPrimeArr = new Array(limit + 1).fill(true);
    isPrimeArr[0] = isPrimeArr[1] = false;
    
    // Start with the smallest prime number, 2
    for (let i = 2; i * i <= limit; i++) {
        if (isPrimeArr[i]) {
            // Mark all multiples of i as not prime
            for (let j = i * i; j <= limit; j += i) {
                isPrimeArr[j] = false;
            }
        }
    }
    
    // Collect all numbers that are still marked as prime
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrimeArr[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}

// ===== EXAMPLE USAGE =====

// Example 1: Check if a single number is prime
console.log("Is 17 prime?", isPrime(17)); // true
console.log("Is 20 prime?", isPrime(20)); // false

// Example 2: Find all primes up to 50
console.log("Prime numbers up to 50:", findPrimes(50));
// Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

// Example 3: Find the first 10 prime numbers
console.log("First 10 prime numbers:", findFirstNPrimes(10));
// Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// Example 4: Find primes up to 100 using Sieve of Eratosthenes (more efficient)
console.log("Prime numbers up to 100 (Sieve):", sieveOfEratosthenes(100));
