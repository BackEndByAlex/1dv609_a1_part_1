import { describe, expect, it } from "vitest"

// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowDayUpTo30"
// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0" //2
// import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat"
// import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn"
// import { SSNHelper } from "../src/bugs/BuggySSNHelperWrongLength"
import { SSNHelper } from "../src/correct/SSNHelper"

describe("SSNHelper Methods", () => {
  const helper = new SSNHelper()

  describe("Validate months and days", () => {
    it("isValidDay Should Allow A Month Be Upp To 31 Days ", () => {
      expect(helper.isValidDay(31)).toBe(true)
    })

    it("IsValidMonth Should Not Allow A Month Start From 0 ", () => {
      expect(helper.isValidMonth(0)).toBe(false)
    })
  })

  describe("Personal Number Validation", () => {
    it("IsCorrectFormat Should Return false if wronge format", () => {
      const wrongFormat = "891011-65252"

      expect(helper.isCorrectFormat(wrongFormat)).toBe(false)
    })

    it("LuhnisCorrest Should Return True For Valid Control Digit", () => {
      const validSSN = "811218-9876"

      expect(helper.luhnisCorrect(validSSN)).toBe(true)
    })

    it("IsCorrectLenght Should Return false To A Wrong lenght", () => {
      const wrongSSN = "021201-10232"

      expect(helper.isCorrectLength(wrongSSN)).toBe(false)
    })
  })
})
