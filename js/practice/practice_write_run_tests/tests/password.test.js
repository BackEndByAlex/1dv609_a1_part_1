import { describe, it, expect } from "vitest"
// Select one of the Password versions to test

// import { Password } from "../src/BugDoesNotHash"
// import { Password } from "../src/BugDoesNotTrim"
// import { Password } from "../src/BugisPasswordAlwaysSame"
// import { Password } from "../src/BugMissingNumberCheck"
// import { Password } from "../src/BugMissingPasswordCheck"
// import { Password } from "../src/BugNeverContainsNumbers" // 5
// import { Password } from "../src/BugToShortPassword"
// import { Password } from "../src/BugVeryShort"
// import { Password } from "../src/BugWrongHashingAlgorithm"
// import { Password } from "../src/BugWrongMessage"
import { Password } from "../src/NewBugObjectComparison"
// import { Password } from "../src/Correct"

describe("Password Trimming", () => {
  it("should check if password is trim", () => {
    const inputpassword = " password 12345 "
    const expectpassword = "password 12345"

    const passwordOne = new Password(inputpassword)
    const passwordTwo = new Password(expectpassword)

    const hashpasswordOne = passwordOne.getPasswordHash()
    const hashpasswordTwo = passwordTwo.getPasswordHash()

    expect(hashpasswordOne).toBe(hashpasswordTwo)
  })
})

describe("Password Equality Check", () => {
  it("should check if passwords are the same", () => {
    const inputpassword = "password 12345"
    const inputpasswordTwo = "password12345"

    const password = new Password(inputpassword)
    const passwordTwo = new Password(inputpasswordTwo)

    const expectpassword = password.isPasswordSame(passwordTwo)

    expect(expectpassword).toBe(false)
  })
})

describe("Password Complexity: Missing Numbers", () => {
  it("should check if password have numbers", () => {
    const inputpassword = "passwordpassword"

    expect(() => {
      new Password(inputpassword)
    }).toThrow("No number found")
  })
})

describe("Valid Password Acceptance", () => {
  it("should check if password has number", () => {
    const inputpassword = "password12345"

    expect(() => {
      new Password(inputpassword)
    }).not.toThrow()
  })
})

describe("Password Length Validation", () => {
  it("should check if password is to shorter < 6 characters ", () => {
    const inputpassword = "pass1122222"

    expect(() => {
      new Password(inputpassword)
    }).toThrow("Too short password")
  })
})

describe("Hashing Algorithm", () => {
  it("should produce the correct hash for 'password1234'", () => {
    const input = "password1234"

    const expectedHash = 8442034857643683000

    const passwordObj = new Password(input)
    const actualHash = passwordObj.getPasswordHash()

    expect(actualHash).toBe(expectedHash)
  })
})

describe("Password Comparison: Error Handling", () => {
  it("should throw invalid argument if the argument is wrong", () => {
    const inputpassword = new Password("password1234")

    const type = "something is wronge here"

    expect(() => {
      inputpassword.isPasswordSame(type)
    }).toThrow("Invalid argument")
  })
})
