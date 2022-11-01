/*const str = "sdfASfsAFgbd1232b3b2j3b5b23hb5";
    const sumNumbers = str.match(/\d+/g).join('').length;
    const sumLetters = str.match(/[a-z]/gi).join('').length;
    console.log(sumNumbers, sumLetters);*/


  /*  function textNumber(number) {
        let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
        let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
        let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
        if (number > 0 && number <= 9) {
          return first[number - 1];
        }
        if (number >= 10 && number <= 20) {
          return second[number - 10];
        }
        if (number > 20 && number <= 99) {
          let str = `${number}`;
          str = str.split('');
          let firstNumber = str[0];
          let secondNumber = str[1];
          //return [ third[firstNumber - 2], first[secondNumber - 1] ];
          return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
        }
      }
      alert(textNumber(7));
      alert(textNumber(20));
      alert(textNumber(55)); */

      /*let string  = 'hello MY name is JavaScript and I like your code styLe'; 
      let result = replaceLetter(string);
       
      function replaceLetter(item) {
          let letter = item.toUpperCase().split('');
          for (let i = 0; i < letter.length; i++) {
            if (letter[i] == item[i])
              letter[i] = letter[i].toLowerCase();
          }
          return letter.join("");
        }
       
        console.log(result);*/ 


        /*
        function CamelCase(str) {
            if (str in document.body.style) {
              return str.replace(/-(\w)/g, (s, l) => l.toUpperCase());
            } else {
              throw new TypeError("Переданная строка не является CSS-селектором");
            }
          }*/
          
          
          
          /*function makeAbbr(words) {
            return words
              .split(' ')
              .reduce((prevVal, curWord) => prevVal + (curWord ? curWord[0]: ''), '')
              .toUpperCase()
          }
          console.log(makeAbbr('Witcher is the most   Clever and Smart and Dangerous one'))
          **/
         /*function task6(...strings) {
            let n = strings.length;
            let newText = "";
            for (let i = 0; i < n; i++) {
                let text = strings[i];
                newText += text;
            }
            return newText;
        }
         
        function task66() {
            let n = prompt("Ввести количество строк, которое нужно добавить: ");
            let strings = [];
            for (let i = 1; i <= n; i++) {
                let text = prompt("Ввод строки №" + i + " : ");
                strings.push(text);
            }
            alert(task6(...strings));
        }
         
        task66(); */



       /* function count(num1, num2, mark) {
            switch (mark) {
              case "*":
                return num1 * num2;
              case "+":
                return num1 + num2;
              case "-":
                return num1 - num2;
              case "/":
                if (num2 !== 0) {
                  return num1 / num2;
                } else {
                  return "не делится на нуль";
                }
            }
          }*/


          /*
          function task8(url) {
            let arr1;
            let protocol;
            let domain;
            let arr2;
            let way;
            arr1 = url.split("://");
            for (let index = 0; index < arr1.length; index++) {
                protocol = arr1[0];
                arr2 = arr1[1].split("/"); 
                domain = arr2[0];
            }   
            arr2.shift();
            way = arr2.join("/");      
                  
            
        return "Информация\nпротокол: "+ protocol
                + "\nдомен: " + domain + "\nпуть: " + way;
        }*/


        /*const f = array => {
            let clone = [...array];
            let length = clone.length;
            let result = '';
            
            for(let i = 0; i < length; i++){
              result += i % 2 === 0 ? clone.shift() : clone.pop();
            }
            
            return result;
          }
          
          console.log(f(["a", "b", "c", "d", "e", "f"]));
          console.log(f(["a", "b", "c", "d", "e"]));*/


        /*function printf(template, ...values) {
            return template.replace(/%(\d+)/g, (str, num) => [...values][num - 1]);
          }
          console.log(printf("Today is %1 %2.%3.%4", "Thursday", 2, 6, 2022));*/