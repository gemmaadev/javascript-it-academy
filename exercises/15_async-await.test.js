// Reescriu tots aquests tests de promeses a async/await

const doAsync = (rejectPromise = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (rejectPromise) {
        reject("rejected");
      } else {
        resolve("resolved");
      }
    }),
  );

test("15_async-await-1: should work with resolved promises", async () => {
  const result = await doAsync();
  expect(result).toBe("resolved");
});

// test("15_async-await-1: should work with resolved promises", async () => {
//   return doAsync().then((result) => {
//     expect(result).toBe("resolved");
//     throw new Error(
//       "convert this to an async/await function and remove this error",
//     );
//   });
// });

test("15_async-await-2: should throw an error with a rejected promise", async () => {
  try {
    await doAsync(true);
  } catch (error) {
    expect(error).toBe("rejected");
  }
});

// test("15_async-await-2: should throw an error with a rejected promise", async () => {
//   return doAsync(true).catch((error) => {
//     expect(error).toBe("rejected");
//     throw new Error(
//       "convert this to an async/await function and remove this error",
//     );
//   });
// });
