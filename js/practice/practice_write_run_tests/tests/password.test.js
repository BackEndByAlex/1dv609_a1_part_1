import { describe, it, expect, test } from "vitest"
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
// import { Password } from "../src/NewBugObjectComparison"
import { Password } from "../src/Correct"

describe("Password Construction and Validation", () => {
  describe("Trimming and Hashing", () => {
    it("Constructor With Padding Should Trim and Match Hash", () => {
      // Arrange
      const inputWithSpaces = " password1234 "
      const inputClean = "password1234"

      // Act
      const passwordPadded = new Password(inputWithSpaces)
      const passwordClean = new Password(inputClean)

      // Assert
      expect(passwordPadded.getPasswordHash()).toBe(
        passwordClean.getPasswordHash()
      )
    })

    it("Get Password Hash Valid Input Should Return Deterministic Hash", () => {
      // Arrange
      const input = "password1234"
      const expectedHash = 8442034857643683000

      // Act
      const passwordObj = new Password(input)

      // Assert
      expect(passwordObj.getPasswordHash()).toBe(expectedHash)
    })
  })

  describe("Lenght Validator", () => {
    it("Construtor lenght is 11 should Throw Error", () => {
      // Arrange
      const elevenChars = "pass1234567"

      // Act => Assert
      expect(() => {
        new Password(elevenChars)
      }).toThrow("Too short password")
    })
  })

  describe("Complexity Validator", () => {
    // Extension tests for better coverage
    test.each([
      ["passwordpassword", "No digits"],
      // ["PASSWORDONLY", "Uppercase only"],
      // ["!!!!£$£€@@@@", "Symbols only"],
    ])(
      "Constructor Input Has %s Should Throw Error For Missiong Numbers",
      // Arrange
      (input) => {
        // Act => Assert
        expect(() => {
          new Password(input)
        }).toThrow("No number found")
      }
    )
  })

  it("Constructor Valid Input With Numbers Should Succeed", () => {
    // Act => Assert
    expect(() => {
      new Password("password1234")
    }).not.toThrow()
  })
})

describe("Password Comparison", () => {
  it("IsPasswordSame Different Password Should Return False", () => {
    // Arrange
    const pass1 = new Password("password1234")
    const pass2 = new Password("password2345")

    // Act
    const isSame = pass1.isPasswordSame(pass2)

    // Assert
    expect(isSame).toBe(false)
  })
  // Test for 100% Coverage
  // it("isPasswordSame Invalid Object Should Throw Invalid Argument", () => {
  //   const passwordObj = new Password("password1234")
  //   const invalidInput = "not a password object"

  //   expect(() => {
  //     passwordObj.isPasswordSame(invalidInput)
  //   }).toThrow("Invalid argument")
  // })
})
