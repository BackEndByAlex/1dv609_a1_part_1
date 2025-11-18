import { assert, describe, it, expect } from "vitest"
// Select one of the Password versions to test

// import { Password } from "../src/BugDoesNotHash"
// import { Password } from "../src/BugDoesNotTrim"
// import { Password } from "../src/BugisPasswordAlwaysSame"
// import { Password } from "../src/BugMissingNumberCheck"
// import { Password } from "../src/BugMissingPasswordCheck"
// import { Password } from "../src/BugNeverContainsNumbers"
// import { Password } from "../src/BugToShortPassword"
// import { Password } from "../src/BugVeryShort"
import { Password } from "../src/BugWrongHashingAlgorithm"
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

describe("BugMissingPasswordCheck", () => {
  it("should check if password is checked", () => {
    const inputpassword = "pass12"

    expect(() => {
      new Password(inputpassword)
    }).toThrow("Too short password")
  })
})

describe("BugNeverContainsNumbers", () => {
  it("should check if password has number", () => {
    const inputpassword = "password12345"

    expect(() => {
      new Password(inputpassword)
    }).not.toThrow()
  })
})

describe("BugToShortPassword, BugVeryShort", () => {
  it("should check if password is to shorter < 11 characters ", () => {
    const inputpassword = "password123"

    expect(() => {
      new Password(inputpassword)
    }).toThrow("Too short password")
  })
  it("should check if password is to shorter < 6 characters ", () => {
    const inputpassword = "pass123"

    expect(() => {
      new Password(inputpassword)
    }).toThrow("Too short password")
  })
})

describe("BugWrongHashingAlgorithm", () => {
  it("should check if hash algorithm is correct", () => {
    const password = "password1234"
    const passwordTwo = "password1234"

    function correcthash(input) {
      let hash = 7
      for (let i = 0; i < input.length; i++) {
        hash = hash * 31 + input.charCodeAt(i)
      }
      return hash
    }

    const passwordOne = new Password(password)
    const hashpassword = passwordOne.getPasswordHash()

    const passwordhash = correcthash(passwordTwo)

    expect(hashpassword).toBe(passwordhash)
  })
})
