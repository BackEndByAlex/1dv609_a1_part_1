| Bug Version                       | 1. Validate days | 2. Validate months | 3. Validate format | 4. Validate digits | 5. Validate Length | STATUS     |
| :-------------------------------- | :--------------: | :----------------: | :----------------: | :----------------: | :----------------: | :--------- |
| **SSNHelper**                     |        ✅        |         ✅         |         ✅         |         ✅         |         ✅         | **OK**     |
| **BuggySSNHelperAllowDayUpTo30**  |        ❌        |         ✅         |         ✅         |         ✅         |         ✅         | **Caught** |
| **BuggySSNHelperAllowMonth0**     |        ✅        |         ❌         |         ✅         |         ✅         |         ✅         | **Caught** |
| **BuggySSNHelperIncorrectFormat** |        ✅        |         ✅         |         ❌         |         ✅         |         ✅         | **Caught** |
| **BuggySSNHelperMessyLuhn**       |        ✅        |         ✅         |         ✅         |         ❌         |         ✅         | **Caught** |
| **BuggySSNHelperWrongLength**     |        ✅        |         ❌         |         ✅         |         ✅         |         ❌         | **Caught** |
