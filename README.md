# Unexpected Null Return in JavaScript Function

This repository demonstrates an uncommon code error in JavaScript where a function unexpectedly returns null when one of its inputs is null, even if the other input is a valid number.  The issue is highlighted and a solution is provided.

## Bug Description
The `foo` function is designed to add two numbers. However, it returns `null` if either input is `null`, regardless of the value of the other input. This behavior might not be intuitive or desirable in all cases.

## Solution
The provided solution handles `null` inputs more gracefully, either treating them as 0 or throwing an error depending on the desired behavior.  Consider the use case and error handling strategy to determine the most appropriate solution for your situation.