import case1 from "../case1";
import Case2 from "../Case2";
import Case3 from "../Case3";

test('case 1', () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    const output = [5, 4, 3, 3, 2, 2, 1, 1]
    expect(case1(input)).toStrictEqual(output)
})

test('case 2', () => {
    const inputArray1 = [100, 200, 300, 400];
    const inputNumber1 = 2
    const inputArray2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const inputNumber2 = 4
    const inputArray3 = [-3, 4, 0, -2, 6, -1];
    const inputNumber3 = 2
    const output1 = 700
    const output2 = 39
    const output3 = 5
    expect(Case2(inputArray1, inputNumber1)).toBe(output1)
    expect(Case2(inputArray2, inputNumber2)).toBe(output2)
    expect(Case2(inputArray3, inputNumber3)).toBe(output3)
})

test('case 3', () => {
    const input1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: "yup",
            },
        },
    };
    const input2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: 'car' },
    };
    const output1 = 6
    const output2 = 12
    expect(Case3(input1)).toStrictEqual(output1)
    expect(Case3(input2)).toStrictEqual(output2)
})

