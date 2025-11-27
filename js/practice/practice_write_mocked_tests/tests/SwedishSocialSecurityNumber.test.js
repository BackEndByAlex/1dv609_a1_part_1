import { beforeEach, describe, expect, vi, it } from "vitest"

// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck"
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoTrim"
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn"
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberWrongYear"
import { SwedishSocialSecurityNumber } from "../src/correct/SwedishSocialSecurityNumber"

describe("SwedishSocialSecurityNumber Controller and Validation", () => {
  let helper

  beforeEach(() => {
    helper = {
      isCorrectLength: vi.fn(),
      isCorrectFormat: vi.fn(),
      isValidMonth: vi.fn(),
      isValidDay: vi.fn(),
      luhnisCorrect: vi.fn(),
    }
  })

  it("Constructor Should Throw Error if the length if wrong", () => {
    helper.isCorrectLength.mockReturnValue(false)

    expect(() => {
      new SwedishSocialSecurityNumber("821221-1165", helper)
    }).toThrow("To short, must be 11 characters")
  })

  it("Constructor Should Trim The input", () => {
    helper.isCorrectLength.mockReturnValue(true)
    helper.isCorrectFormat.mockReturnValue(true)
    helper.isValidDay.mockReturnValue(true)
    helper.isValidDay.mockReturnValue(true)
    helper.luhnisCorrect.mockReturnValue(true)

    const inputWithSpaces = " 821221-1165 "
    const expectedInput = "821221-1165"

    new SwedishSocialSecurityNumber(inputWithSpaces, helper)

    expect(helper.isCorrectLength).toHaveBeenCalledWith(expectedInput)
  })

  it("Constructor Should Throw Error For Wrong Algorithm", () => {
    helper.luhnisCorrect.mockReturnValue(false)

    expect(() => {
      new SwedishSocialSecurityNumber("811218%9876", helper)
    }).toThrowError("Invalid SSN according to Luhn's algorithm")
  })

  it("Consctructor Should Throw Error For Incorect Format", () => {
    helper.isCorrectFormat.mockReturnValue(false)

    expect(() => {
      new SwedishSocialSecurityNumber("123-332", helper)
    }).toThrow("Incorrect format, must be: YYMMDD-XXXX")
  })

  it("Constructor Should Throw error for wrong day", () => {
    helper.isValidDay.mockReturnValue(false)

    expect(() => {
      new SwedishSocialSecurityNumber("999999-999", helper)
    }).toThrow("Invalid month in SSN")
  })

  it("Constructor Should Throw error for wrong month", () => {
    helper.isValidMonth.mockReturnValue(false)

    expect(() => {
      new SwedishSocialSecurityNumber("999999-999", helper)
    }).toThrow("Invalid month in SSN")
  })

  describe("Methods returns", () => {
    it("GetYear Should Return First Two Digits In SSSNumber", () => {
      helper.isCorrectFormat.mockReturnValue(true)

      const SSSN = new SwedishSocialSecurityNumber("821221-1165", helper)

      const getYear = SSSN.getYear()

      expect(getYear).toBe("82")
    })

    it("GetSerialNumber Should retrive the personal numbers", () => {
      helper.isCorrectLength.mockReturnValue(true)
      helper.isCorrectFormat.mockReturnValue(true)

      const SSSN = new SwedishSocialSecurityNumber("821221-1165", helper)

      const getPersonalNumber = SSSN.getSerialNumber()

      expect(getPersonalNumber).toBe("1165")
    })
  })
})
