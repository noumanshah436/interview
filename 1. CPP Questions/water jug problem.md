**water jug problem** (also known as the **Die Hard problem** from the movie). You have:

* One **5-liter jug**
* One **3-liter jug**
* An **unlimited water source**
* The goal: **Measure exactly 4 liters**

You can **solve it step-by-step** as follows:

---

### ✅ Steps to Get Exactly 4 Liters in the 5L Jug:

1. **Fill the 3L jug completely.**

   * 5L: 0
   * 3L: 3

2. **Pour the 3L into the 5L jug.**

   * 5L: 3
   * 3L: 0

3. **Fill the 3L jug again.**

   * 5L: 3
   * 3L: 3

4. **Pour from the 3L into the 5L until it’s full.**
   5L already has 3L, so it can take 2L more.

   * 5L: 5
   * 3L: 1

5. **Empty the 5L jug.**

   * 5L: 0
   * 3L: 1

6. **Pour the 1L from the 3L into the 5L.**

   * 5L: 1
   * 3L: 0

7. **Fill the 3L jug again.**

   * 5L: 1
   * 3L: 3

8. **Pour from the 3L into the 5L.**
   5L already has 1L, can take 4L. Pour all 3L.

   * ✅ **5L: 4 (Done!)**
   * 3L: 0

---

### 🧠 Key Insight:

You achieve this using the idea of transferring water back and forth between the two jugs while keeping track of the volumes.

Let me know if you want a **Python program** to simulate this!
