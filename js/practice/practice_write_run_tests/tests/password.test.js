import { assert, describe, it, expect } from "vitest"
// Select one of the Password versions to test

// import { Password } from "../src/BugDoesNotHash"
// import { Password } from "../src/BugDoesNotTrim"
// import { Password } from "../src/BugisPasswordAlwaysSame"
import { Password } from "../src/BugMissingNumberCheck"
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from "../src/BugWrongHashingAlgorithm"
// import { Password } from '../src/BugWrongMessage'
// import { Password } from "../src/Correct"

describe("BugDoesNotHash", () => {
  it("should check if the password is hash or not", () => {
    const inputpassword = "password12345"

    const password = new Password(inputpassword)

    const hashpassword = password.getPasswordHash()

    assert.notEqual(inputpassword, hashpassword)
  })
})

describe("BugDoesNotTrim", () => {
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

describe("BugisPasswordAlwaysSame", () => {
  it("should check if passwords are the same", () => {
    const inputpassword = "password 12345"
    const inputpasswordTwo = "password12345"

    const password = new Password(inputpassword)
    const passwordTwo = new Password(inputpasswordTwo)

    const expectpassword = password.isPasswordSame(passwordTwo)

    expect(expectpassword).toBe(false)
  })
})

describe("BugMissingNumberCheck", () => {
  it("should check if password have numbers", () => {
    const inputpassword = "passwordpassword"

    expect(() => {
      new Password(inputpassword)
    }).toThrow("No number found")
  })
})
