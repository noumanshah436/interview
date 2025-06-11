### **Cohesion and Coupling** are two fundamental concepts in software engineering, especially in object-oriented design. Understanding them helps you write **maintainable, scalable, and modular code**.

---

## 🔗 **Coupling**

**Definition:**
Coupling refers to **how dependent one module/class is on another**.
It shows the **degree of interconnection** between components.

### Types:

* **Tight (High) Coupling:**

  * Modules are **heavily dependent** on each other.
  * A change in one module often **requires changes** in others.
  * **Bad for maintainability.**
* **Loose (Low) Coupling:**

  * Modules are **independent or minimally dependent**.
  * You can change one module without affecting others.
  * **Good practice.**

### 🎯 Goal: **Low coupling**

This makes your code easier to **test**, **maintain**, and **reuse**.

---

## 🧱 **Cohesion**

**Definition:**
Cohesion refers to **how closely related the responsibilities/functions of a module/class are**.
It measures **how focused** a module is.

### Types:

* **Low Cohesion:**

  * A class does **many unrelated tasks**.
  * Hard to understand and maintain.
* **High Cohesion:**

  * A class has **one well-defined purpose**.
  * All its methods and properties are **closely related**.
  * **Good design.**

### 🎯 Goal: **High cohesion**

This results in **clearer**, more **understandable**, and **easier to maintain** code.

---

## ✅ Summary

| Concept  | Ideal    | Example                                  |
| -------- | -------- | ---------------------------------------- |
| Coupling | **Low**  | Each class/module works independently    |
| Cohesion | **High** | Each class/module does **one clear job** |

---

## 🧠 Real-life Example

Imagine a `UserManager` class:

### ❌ Bad Design (Low Cohesion, High Coupling):

```python
class UserManager:
    def create_user(self):
        pass
    def delete_user(self):
        pass
    def send_email(self):
        pass  # Unrelated responsibility
    def generate_pdf_report(self):
        pass  # Unrelated responsibility
```

### ✅ Good Design (High Cohesion, Low Coupling):

```python
class UserManager:
    def create_user(self):
        pass
    def delete_user(self):
        pass

class EmailService:
    def send_email(self):
        pass

class ReportGenerator:
    def generate_pdf_report(self):
        pass
```

Each class has **one clear job** (high cohesion) and is **independent of others** (low coupling).
