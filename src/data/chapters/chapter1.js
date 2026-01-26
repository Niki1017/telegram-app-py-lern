const chapter1 = {
    id: 1,
    title: "Типы данных, сравнения и сортировка",
    subchapters: [
      {
        id: "1.1",
        title: "Основные типы данных",
        content: `
**Вывод информации в терминал**
print() - встроенная функция для вывода информации на экран
Она печатает всё, что можно выразить через символы: 
буквы, цифры, специальные символы, результаты подсчёта математических выражений, тексты ошибок и исключений 
Он пишется в конце программы или для проверки:

**Пример:** 
\`\`\`print(5) # в терминал выведет 5
\`\`\`

Типы данных — это способ классификации данных в Python.

**Основные типы:**
- int — целые числа
- float — числа с плавающей точкой
- str — строки (текст)
- bool — логические значения (True/False)
- list — изменяемый список
- tuple — неизменяемый список
- dict — словарь (ключ: значение)
- set — множество
- frozenset — неизменяемое множество

**Примеры:**
\`\`\`x = 5           # int
y = 3.14        # float
name = "Alice"  # str
flag = True     # bool
numbers = [1,2,3] # list
coords = (10,20)  # tuple
person = {"name": "Bob", "age": 25} # dict
unique = {1,2,3} # set
\`\`\`
        `
      },
      {
        id: "1.2",
        title: "Сравнение и логика",
        content: `
В Python доступны следующие **операторы сравнения**:

- ==  (равно)
- !=  (не равно)
- <   (меньше)
- >   (больше)
- <=  (меньше или равно)
- >=  (больше или равно)

**Пример:**
\`\`\`a = 10
b = 5

print(a > b)   # True
print(a == b)  # False
\`\`\`

**Логические операторы:**

- and — и
- or  — или
- not — не

**Пример:**
\`\`\`x = True
y = False

print(x and y) # False
print(x or y)  # True
print(not x)   # False
\`\`\`
        `
      },
      {
        id: "1.3",
        title: "Сортировка и ключи сортировки",
        content: `
Python предоставляет встроенные методы для сортировки.

- sorted(iterable, key=..., reverse=...) — возвращает новый отсортированный список
- list.sort(key=..., reverse=...) — сортирует список на месте

**Примеры:**
\`\`\`numbers = [5, 2, 9, 1]

# отсортированный список
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # [1, 2, 5, 9]

# сортировка списка на месте
numbers.sort(reverse=True)
print(numbers)         # [9, 5, 2, 1]

# сортировка сложных объектов по ключу
students = [{"name": "Alice", "age": 20}, {"name": "Bob", "age": 18}]
students_sorted = sorted(students, key=lambda s: s["age"])
print(students_sorted)
# [{'name': 'Bob', 'age': 18}, {'name': 'Alice', 'age': 20}]
\`\`\`
        `
      }
    ]
}


export default chapter1;