| Bug Version                                    | 1. Validate Length | 2. Validate trim | 3. Validate alghoritm | 4. Validate year | STATUS     |
| :--------------------------------------------- | :----------------: | :--------------: | :-------------------: | :--------------: | :--------- |
| **SwedishSocialSecurityNumber**                |         ✅         |        ✅        |          ✅           |        ✅        | **OK**     |
| **BuggySwedishSocialSecurityNumberNoLenCheck** |         ❌         |        ✅        |          ✅           |        ✅        | **Caught** |
| **BuggySwedishSocialSecurityNumberNoTrim**     |         ❌         |        ❌        |          ✅           |        ✅        | **Caught** |
| **BuggySwedishSocialSecutityNumberNoLuhn**     |         ✅         |        ✅        |          ❌           |        ✅        | **Caught** |
| **BuggySwedishSocialSecutityNumberWrongYear**  |         ✅         |        ✅        |          ✅           |        ❌        | **Caught** |
