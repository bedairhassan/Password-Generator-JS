let ran = len => Math.floor(Math.random() * len);
let ranBin = () => ran(2);
let available = (string, victim) =>
  [...string].filter(item => item === victim)[0] !== undefined;

// global //
let HUGE = []; // 2d array
//

// input by programmer
let myIndex = ['small letter', 'capital letter', 'value', 'special character']; // myIndex is indeed hardcoded !
let D2 = [
  [...'abcdefghijklmnopqrstuvwxyz'],
  [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
  [...'1234567890'],
  [...'!@#$%^&*()_+-=`~'],
];

let check = index => {
  // hardcoded because :)

  // console.log(index)
  for (let i = 0; i < myIndex.length; i++) {
    if (i === index) {
      return myIndex[i];
    }
  }

  return;
};

let fun = (array, MAX) => {
  condition = true;
  count = 1;
  pass = '';

  prev = myIndex[0]; // can't be value
  while (condition) {
    // initial
    count++;
    D1 = []; // 1D array
    //

    array.map((sub, index) => {
      // code segment 1
      if (ranBin()) {
        return;
      }
      //

      // code segment 2 : major checking phase !
      current = check(index);
      if (current === prev) {
        return;
      }
      //

      // code segment 3
      let randomC = sub[ran(sub.length)]; // static, do not remove this variable since it is used in function call
      pass = !available(pass, randomC) ? pass + randomC : pass;
      //

      // code segment 4
      D1.push(current);
      prev = current;
      //
    });

    // update
    HUGE.push(D1);
    condition = !(count > MAX);
  }

  return pass;
};

let passw = fun(D2, 64);
console.log(passw);
