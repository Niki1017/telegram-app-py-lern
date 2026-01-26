const chapter2 = {
  id: 2,
  title: "Управляющие конструкции и логика программы",
  subchapters: [
    {
      id: "2.1",
      title: "Условный оператор if",
      content: `
Оператор if выполняет код, если условие имеет значение True.
Пример:
\`age = 18
if age >= 18:
    print("Доступ разрешён")
\`
Если условие ложно, код внутри блока if не выполняется.
`
    },
    {
      id: "2.2",
      title: "else и elif",
      content: `
else выполняется, если условие if не выполнено.
\`age = 15
if age >= 18:
    print("Доступ разрешён")
else:
    print("Доступ запрещён")
\`

elif позволяет проверять несколько условий последовательно.
\`score = 75
if score >= 90:
    print("Отлично")
elif score >= 70:
    print("Хорошо")
else:
    print("Нужно подтянуть знания")
\`
`
    },
    {
      id: "2.3",
      title: "Логические операторы",
      content: `
Логические операторы объединяют условия:
and — оба условия истинны
or — истинно хотя бы одно условие
not — инвертирует значение
\`age = 20
has_passport = True
if age >= 18 and has_passport:
    print("Можно ехать")
\`
`
    },
    {
      id: "2.4",
      title: "Цикл while",
      content: `
Цикл while выполняется, пока условие истинно.
\`count = 0
while count < 5:
    print(count)
    count += 1
\`

Важно следить, чтобы условие выхода было достижимо.
`
    },
    {
      id: "2.5",
      title: "Цикл for",
      content: `
Цикл for используется для перебора последовательностей.
\`for i in range(5):
    print(i)
\`

Перебор списка:
\`fruits = ["яблоко", "банан", "груша"]
for fruit in fruits:
    print(fruit)
\`
`
    },
    {
      id: "2.6",
      title: "break и continue",
      content: `
break полностью прекращает выполнение цикла.
\`for i in range(10):
    if i == 5:
        break
    print(i)
\`

continue пропускает текущую итерацию.
\`for i in range(5):
    if i == 2:
        continue
    print(i)
\`
`
    },
    {
      id: "2.7",
      title: "Оператор pass",
      content: `
Используется, когда блок кода синтаксически необходим, но логика ещё не реализована.
\`if True:
    pass
\`
`
    },
    {
      id: "2.8",
      title: "Вложенные условия и циклы",
      content: `
Условия и циклы могут быть вложены друг в друга.
\`for i in range(3):
    for j in range(2):
        print(i, j)
\`

Пример с условием внутри цикла:
\`for i in range(5):
    if i % 2 == 0:
        print(i, "— чётное")
\`
`
    },
    {
      id: "2.9",
      title: "Практические примеры",
      content: `
Проверка пароля:
\`password = "1234"
user_input = input("Введите пароль: ")
if user_input == password:
    print("Вход выполнен")
else:
    print("Неверный пароль")
\`

Подсчёт суммы чисел:
\`total = 0
for i in range(1, 6):
    total += i
print(total)
\`
`
    }
  ]
};

export default chapter2;