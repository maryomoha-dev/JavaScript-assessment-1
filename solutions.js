
// Problem 1: Two Sum

function twoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        if (seen.has(need)) {
            return [seen.get(need), i];
        }

        seen.set(nums[i], i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));






// Problem 2: Valid Anagram

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = new Map();

    for (const ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    for (const ch of t) {
        if (!count.get(ch)) {
            return false;
        }

        count.set(ch, count.get(ch) - 1);
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("listen", "silent"));





// Problem 3: Group Anagrams

function groupAnagrams(words) {
    const map = new Map();

    for (const word of words) {
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
}

console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);




// problem set 4: Longest unique substring

function lengthOfLongestSubstring(s)
{
    const set= new set();

    let left = 0;
    let longest = 0;

    for (let right = 0; right < s.length; right++) {
        set.has(s[right]);
        const length = right - left + 1;
        longst = Math.max(longest, length);
    }
    return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));




// problem 5: Flatten & Deduplicate

function flatUnique(arr) {
    return Array.from(new set(arr.flat(Infinity)))
    .sort((a, b) => a - b);
}

console.log(
    flatUnique([1, [2, [3, 2]], [1, [4, 3]]])
);

console.log(
    flatUnique([[5, 5], [3, [3, 1]], 2])
);