import { beforeEach, describe, expect, vi, it } from "vitest"

// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck"
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoTrim"
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn"
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberWrongYear"
import { SwedishSocialSecurityNumber } from "../src/correct/SwedishSocialSecurityNumber"

vi.mock("../src/correct/SSNHelper")

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

  it("Constructor Should Throw Error if the lenght if wrong", () => {
    helper.isCorrectLength.mockReturnValue(false)

    expect(() => {
      new SwedishSocialSecurityNumber("821221-1165", helper)
    }).toThrow("To short, must be 11 characters")
  })
})
