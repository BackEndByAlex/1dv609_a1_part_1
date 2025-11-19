| Bug Version                  | 1. Trimming | 2. Equality | 3. Miss Numbers | 4. Valid PW | 5. Length Val | 6. Hashing | 7. Invalid Arg | STATUS                |
| :--------------------------- | :---------: | :---------: | :-------------: | :---------: | :-----------: | :--------: | :------------: | :-------------------- |
| **Correct**                  |     ✅      |     ✅      |       ✅        |     ✅      |      ✅       |     ✅     |       ✅       | **OK**                |
| **BugDoesNotHash**           |     ✅      |     ✅      |       ✅        |     ✅      |      ✅       |     ❌     |       ✅       | **Caught**            |
| **BugDoesNotTrim**           |     ❌      |     ✅      |       ✅        |     ✅      |      ✅       |     ✅     |       ✅       | **Caught**            |
| **BugisPasswordAlwaysSame**  |     ✅      |     ❌      |       ✅        |     ✅      |      ✅       |     ✅     |       ✅       | **Caught**            |
| **BugMissingNumberCheck**    |     ✅      |     ✅      |       ❌        |     ✅      |      ✅       |     ✅     |       ✅       | **Caught**            |
| **BugMissingPasswordCheck**  |     ✅      |     ✅      |       ✅        |     ✅      |      ❌       |     ✅     |       ✅       | **Caught**            |
| **BugNeverContainsNumbers**  |     ❌      |     ❌      |       ✅        |     ❌      |      ✅       |     ❌     |       ❌       | **Caught**            |
| **BugToShortPassword**       |     ✅      |     ✅      |       ✅        |     ✅      |      ❌       |     ✅     |       ✅       | **Caught**            |
| **BugVeryShort**             |     ✅      |     ✅      |       ✅        |     ✅      |      ❌       |     ✅     |       ✅       | **Caught**            |
| **BugWrongHashingAlgorithm** |     ✅      |     ✅      |       ✅        |     ✅      |      ✅       |     ❌     |       ✅       | **Caught**            |
| **BugWrongMessage**          |     ✅      |     ✅      |       ✅        |     ✅      |      ❌       |     ✅     |       ✅       | **Caught**            |
| **NewBugObjectComparison**   |     ✅      |     ✅      |       ✅        |     ✅      |      ✅       |     ✅     |       ✅       | **OK ?** (Bug exists) |
