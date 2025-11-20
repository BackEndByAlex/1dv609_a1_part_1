import { describe, expect, it } from "vitest"

// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowDayUpTo30"
// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0"
// import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat"
import { SSNHelper } from "../src/correct/SSNHelper"

describe("Allow upp to 30 days", () => {
  it("isValidDay should return true for valid date on the 31st (t.ex Janary)", () => {
    const validSSNcheck31st = "31"

    const helper = new SSNHelper()
    const validDate = helper.isValidDay(validSSNcheck31st)

    expect(validDate).toBe(true)
  })
})

describe("Allow month 0", () => {
  it("isValidMounth should return false for valid mounth 0", () => {
    const validSSNcheck0Mounth = "0"

    const helper = new SSNHelper()
    const validMounth = helper.isValidMonth(validSSNcheck0Mounth)

    expect(validMounth).toBe(false)
  })
})

describe("Check the string format", () => {
  it("isCorrectFormat should return false for wronge format", () => {
    const wrongeFormat = "232212-13212"

    const helper = new SSNHelper()
    const validFormat = helper.isCorrectFormat(wrongeFormat)

    expect(validFormat).toBe(false)
  })
})
