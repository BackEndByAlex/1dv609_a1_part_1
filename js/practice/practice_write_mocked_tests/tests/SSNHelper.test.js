import { describe, expect, it } from "vitest"

import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowDayUpTo30"
// import { SSNHelper } from "../src/correct/SSNHelper"

describe("Allow upp to 30 days", () => {
  it("isValid should return true for valid date on the 31st (t.ex Janary)", () => {
    const validSSNcheck31st = "31"

    const helper = new SSNHelper()
    const validDate = helper.isValidDay(validSSNcheck31st)

    expect(validDate).toBe(true)
  })
})
