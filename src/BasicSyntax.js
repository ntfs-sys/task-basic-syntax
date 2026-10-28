export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length; i++) {
        const current = map[str[i]];
        const next = map[str[i + 1]];

        // Если текущая меньше следующей — вычитаем (IV = -1 + 5 = 4)
        if (current < next) {
            result -= current;
        } else {
            // Иначе прибавляем (VI = 5 + 1 = 6)
            result += current;
        }
    }

    return result;
}
