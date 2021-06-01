//****** Chapter 4 ******

//Question 1
//var a, b, c;

//Question 2
//var world_economy, fireForce, SalaryMan, x, loan;
//var 5persona, !hero, alert, 6avr5, &friends;

var chapNumber = +prompt("Enter chapter number to run its executable tasks: (From 4 to 9)");
if (chapNumber === 4)
{
  //Question 3
  //*3a
  var heading = document.createElement("H1");
  var heading_text = document.createTextNode("Rules for naming variables in JS");
  heading.appendChild(heading_text);
  document.body.appendChild(heading);
}

//*3b
//letters, numbers, $, _

//*3c
//$, _, letter

//*3d
//sensitive

//*3e
//keywords

//****** Chapter 5 ******

else if (chapNumber === 5)
{
  var taskNumber = +prompt("Enter the task number to run the task you want to check: (From 1 to 13)");
  if (taskNumber === 1)
  {
    //Question 1
    var num1 = 5,
      num2 = 10;
    var sum = num1 + num2;
    document.write("The sum of " + num1 + " and " + num2 + " is " + sum + ".");
  }

  else if (taskNumber === 2)
  {
    //Question 2

    //Subtraction
    var num1 = 5,
      num2 = 10;
    var difference = num1 - num2;
    document.write("The difference between " + num1 + " and " + num2 + " is " + difference + ".<br />");

    //Multiplication
    var num1 = 5,
      num2 = 10;
    var product = num1 * num2;
    document.write("The product of " + num1 + " and " + num2 + " is " + product + ".<br />");

    //Division
    var num1 = 5,
      num2 = 10;
    var quotient = num1 / num2;
    document.write("The quotient of " + num1 + " divied by " + num2 + " is " + quotient + ".<br />");

    //Modulus
    var num1 = 5,
      num2 = 10;
    var remainder = num1 % num2;
    document.write("The remainder of " + num1 + " divided by " + num2 + " is " + remainder + ".");
  }

  else if (taskNumber === 3)
  {
    //Question 3
    var some_variable;
    document.write("Value of the variable after declaration: " + some_variable + "<br />");
    some_variable = 11;
    document.write("Inital value of variable: " + some_variable + "<br />");
    some_variable++;
    document.write("Value after increment: " + some_variable + "<br />");
    some_variable += 7;
    document.write("Value after adding 7: " + some_variable + "<br />");
    some_variable--;
    document.write("Value after decrement: " + some_variable + "<br />");
    var remainder;
    remainder = some_variable % 3;
    document.write("The remainder after division by 3: " + remainder);
  }

  else if (taskNumber === 4)
  {
    //Question 4
    var ticket_price = 600;
    document.write("The cost of a single movie ticket is " + ticket_price + "PKR.<br />");
    ticket_price *= 5;
    document.write("The cost of five movie tickets is " + ticket_price + "PKR.");
  }

  else if (taskNumber === 5)
  {
    //Question 5
    //Table Of 5

    var heading = document.createElement("H1");
    var heading_text = document.createTextNode("Table Of 5");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var multiplicand = 5,
      multiplier = 1,
      multiple = 5;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple + "<br />");
    multiplier++;
    multiple = multiplicand * multiplier;
    document.write(multiplicand + " × " + multiplier + " = " + multiple);
  }

  else if (taskNumber === 6)
  {
    //Question 6
    var heading = document.createElement("H1");
    var heading_text = document.createTextNode("The Temperature Converter");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var celsius = 37;
    var fahrenheit = (celsius * (9 / 5)) + 32;
    document.write(celsius + "°C is " + fahrenheit + "°F.<br />");
    fahrenheit = 212;
    celsius = (fahrenheit - 32) * (5 / 9);
    document.write(fahrenheit + "°F is " + celsius + "°C.<br />");
  }

  else if (taskNumber === 7)
  {
    //Question 7
    var heading = document.createElement("H1");
    var heading_text = document.createTextNode(" Shopping Cart");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var item1_price = 400;
    var item2_price = 790;
    var item1_quantity = 8;
    var item2_quantity = 6;
    var item1_total_price = item1_price * item1_quantity;
    var item2_total_price = item2_price * item2_quantity;
    var shipping_charges = 200;
    var total_cost = item1_total_price + item2_total_price + shipping_charges;
    document.write("Price of Item 1: " + item1_price + "$<br />");
    document.write("Quantity of Item 1: " + item1_quantity + " units<br />");
    document.write("Price of Item 2: " + item2_price + "$<br />");
    document.write("Quantity of Item 2: " + item2_quantity + " units<br />");
    document.write("Shipping Charges: " + shipping_charges + "$<br />");
    document.write("Total cost of your order: " + total_cost + "$");
  }

  else if (taskNumber === 8)
  {
    //Question 8
    var heading = document.createElement("H1");
    var heading_text = document.createTextNode("Marks Sheet");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var total_marks = 1100;
    var obtained_marks = 877;
    var percentage = (obtained_marks * 100) / total_marks;
    document.write("Total marks: " + total_marks + "<br />");
    document.write("Obtained marks: " + obtained_marks + "<br />");
    document.write("Percentage: " + percentage + "%");
  }

  else if (taskNumber === 9)
  {
    //Question 9
    var heading = document.createElement("H1");
    var heading_text = document.createTextNode("Currency In PKR");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var us_dollars = 10;
    var saudi_riyals = 25;
    var pakistani_rupees = (us_dollars * 152.88) + (saudi_riyals * 40.76);
    document.write("US Dollars: " + us_dollars + "<br />");
    document.write("Saudi Riyals: " + saudi_riyals + "<br />");
    document.write(" Total currency in PKR: " + pakistani_rupees);
  }

  else if (taskNumber === 10)
  {
    //Question 10
    var another_variable = 20;
    var result = (another_variable + 5) * 10 / 2
    document.write("The initial value of the variable is " + another_variable + ".<br />")
    document.write("The result of random arithmetic is " + result + ".");
  }

  else if (taskNumber === 11)
  {
    //Question 11
    var heading = document.createElement("H1");
    var heading_text = document.createTextNode(" Age Calculator");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var current_year = 2021;
    var birth_year1 = 2001,
      birth_year2 = 2002;
    var age1 = current_year - birth_year1;
    var age2 = current_year - birth_year2;
    document.write("Current Year: " + current_year + "<br />")
    document.write("Birth Year: " + birth_year1 + " or " + birth_year2 + "<br />")
    document.write("You are either " + age1 + " or " + age2 + " years old.");
  }

  else if (taskNumber === 12)
  {
    //Question 12
    var heading = document.createElement("H1");
    var heading_text = document.createTextNode("Geometrizer");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var radius = 20;
    var circumference = 2 * 3.142 * radius;
    var area = 3.142 * (radius * radius);
    document.write("Radius of circle: " + radius + "cm<br />");
    document.write("Circumference of circle: " + circumference + "cm<br />");
    document.write("Area of circle: " + area + "cm<br />");
  }

  else if (taskNumber === 13)
  {
    //Question 13
    var heading = document.createElement("H1");
    var heading_text = document.createTextNode("The Lifetime Supply Calculator");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var favorite_snack = "Favorite Snack";
    var current_age = 20;
    var max_age = 30;
    var daily_snacks = 1;
    var lifetime_snacks = daily_snacks * 365 * (max_age - current_age);
    document.write("Favorite Snack: " + favorite_snack + "<br />");
    document.write("Current Age: " + current_age + " years<br />");
    document.write("Estimated Maximum Age: " + max_age + " years<br />");
    document.write("Amount Of Snacks Per Day: " + daily_snacks + "<br />");
    document.write("You will need " + lifetime_snacks + " " + favorite_snack + "s to last you until the young age of " + max_age + " years.");
  }

  else
  {
    alert("Invalid Input!");
  }
}

// ****** Chapter 6-9 ******
else if (chapNumber === 6 || chapNumber === 7 || chapNumber === 8 || chapNumber === 9)
{
  alert("Chapter 6-9's tasks are all together!");
  var taskNumber = +prompt("Enter the task number to run the task you want to check: (From 1 to 6)");
  if (taskNumber === 1)
  {
    //Question 1
    var a = 10;
    document.write("Result:<br />");
    document.write("The value of a is: " + a + "<br />");
    document.write("..........................<br /><br />");
    document.write("The value of ++a is: " + ++a + "<br />");
    document.write("Now the value of a is: " + a + "<br /><br /><br />");
    document.write("The value of a++ is: " + a++ + "<br />");
    document.write("Now the value of a is: " + a + "<br /><br /><br />");
    document.write("The value of --a is: " + --a + "<br />");
    document.write("Now the value of a is: " + a + "<br /><br /><br />");
    document.write("The value of a-- is: " + a-- + "<br />");
    document.write("Now the value of a is: " + a + "<br /><br /><br />");
  }

  else if (taskNumber === 2)
  {
    //Question 2
    var a = 2,
      b = 1;
    var result = --a - --b + ++b + b--;
    document.write("--a: Value of a is decremented by one. (a = 1, result = 1)<br />");
    document.write("--a - --b: Value of b is decremented by one and is subtracted from the decremented value of a. (a = 1, b = 0, result = 1)<br />");
    document.write("--a - --b + ++b: Value of b is incremented by one and added to the value obtained in the previous step. (a = 1, b = 1, result = 2)<br />");
    document.write("--a- --b + ++b + b--: Value of b is added to the value obtained in the previous step and the b is decremented by one. (a = 1, b = 1, result = 3)<br />");
  }

  else if (taskNumber === 3)
  {
    //Question 3
    var question = "Enter your name:";
    var answer = prompt(question);
    alert("Hi " + answer + ".");
  }

  else if (taskNumber === 4)
  {
    alert("Task 4 doesn't exist");
  }

  else if (taskNumber === 5)
  {
    //Question 5
    var multiplicand = 5,
      multiplier = 1,
      multiple = 5;
    var message = "Enter a number to see its multiplication table:"
    var userInput = prompt(message);
    if (userInput === null || userInput === "")
    {
      document.write("Table Of 5<br />")
      for (var i = 0; i < 10; i++)
      {
        document.write(multiplicand + " x " + multiplier + " = " + multiple + "<br />");
        multiplier++;
        multiple = multiplicand * multiplier;
      }
    }

    else
    {
      multiplicand = eval(userInput);
      multiple = multiplicand * multiplier;
      document.write(" Table Of " + multiplicand + "<br />");
      for (var i = 0; i < 10; i++)
      {
        document.write(multiplicand + " x " + multiplier + " = " + multiple + "<br />");
        multiplier++;
        multiple = multiplicand * multiplier;
      }
    }
  }

  else if (taskNumber === 6)
  {
    //Question 6
    var max_marks = 100,
      total_marks = 300;
    var subject1, subject2, subject3;
    var obt_marks1, obt_marks2, obt_marks3;
    var total_obt_marks;
    var percentage1, percentage2, percentage3, total_percentage;

    subject1 = prompt("Enter first subject:");
    while (subject1 === null || subject1 === "")
    {
      if (subject1 === null)
      {
        alert("You can't cancel!");
        subject1 = prompt("Enter first subject:");
      }
      if (subject1 === "")
      {
        alert("You entered nothing!");
        subject1 = prompt("Enter first subject:");
      }
    }
    obt_marks1 = prompt("Enter obtained marks:");
    while (obt_marks1 === null || obt_marks1 === "" || obt_marks1 > max_marks)
    {
      if (obt_marks1 === null)
      {
        alert("You can't cancel!");
        obt_marks1 = prompt("Enter obtained marks:");
      }
      if (obt_marks1 === "")
      {
        alert("You entered nothing!");
        obt_marks1 = prompt("Enter obtained marks:");
      }
      if (obt_marks1 > max_marks)
      {
        alert("Max marks are 100!");
        obt_marks1 = prompt("Enter obtained marks:");
      }
    }

    subject2 = prompt("Enter second subject:");
    while (subject2 === null || subject2 === "")
    {
      if (subject2 === null)
      {
        alert("You can't cancel!");
        subject2 = prompt("Enter second subject:");
      }
      if (subject2 === "")
      {
        alert("You entered nothing!");
        subject2 = prompt("Enter second subject:");
      }
    }
    obt_marks2 = prompt("Enter obtained marks:");
    while (obt_marks2 === null || obt_marks2 === "" || obt_marks2 > 100)
    {
      if (obt_marks2 === null)
      {
        alert("You can't cancel!");
        obt_marks2 = prompt("Enter obtained marks:");
      }
      if (obt_marks2 === "")
      {
        alert("You entered nothing!");
        obt_marks2 = prompt("Enter obtained marks:");
      }
      if (obt_marks2 > max_marks)
      {
        alert("Max marks are 100!");
        obt_marks2 = prompt("Enter obtained marks:");
      }
    }

    subject3 = prompt("Enter third subject:");
    while (subject3 === null || subject3 === "")
    {
      if (subject3 === null)
      {
        alert("You can't cancel!");
        subject3 = prompt("Enter third subject:");
      }
      if (subject3 === "")
      {
        alert("You entered nothing!");
        subject3 = prompt("Enter third subject:");
      }
    }
    obt_marks3 = prompt("Enter obtained marks:");
    while (obt_marks3 === null || obt_marks3 === "" || obt_marks3 > max_marks)
    {
      if (obt_marks3 === null)
      {
        alert("You can't cancel!");
        obt_marks3 = prompt("Enter obtained marks:");
      }
      if (obt_marks3 === "")
      {
        alert("You entered nothing!");
        obt_marks3 = prompt("Enter obtained marks:");
      }
      if (obt_marks3 > max_marks)
      {
        alert("Max marks are 100!");
        obt_marks3 = prompt("Enter obtained //marks:");
      }
    }

    percentage1 = (obt_marks1 * 100) / max_marks;
    percentage2 = (obt_marks2 * 100) / max_marks;
    percentage3 = (obt_marks3 * 100) / max_marks;
    total_obt_marks = eval(obt_marks1) + eval(obt_marks2) + eval(obt_marks3);
    total_percentage = (total_obt_marks * 100) / total_marks;

    document.write("<table>")
    document.write("<tr><th><center>Subject</center></th><th><center>Total Marks</center></th><th><center>Obtained Marks</center></th><th><center>Percentage</center></th></tr>")
    document.write("<tr><td><center>" + subject1 + "</center></td><td><center>" + max_marks + "</center></td><td><center>" + obt_marks1 + "</center></td><td><center>" + percentage1 + "%" + "</center></td></td>")
    document.write("<tr><td><center>" + subject2 + "</center></td><td><center>" + max_marks + "</center></td><td><center>" + obt_marks2 + "</center></td><td><center>" + percentage2 + "%" + "</center></td></td>")
    document.write("<tr><td><center>" + subject3 + "</center></td><td><center>" + max_marks + "</center></td><td><center>" + obt_marks3 + "</center></td><td><center>" + percentage3 + "%" + "</center></td></td>")
    document.write("<tr><td></td>" + "<td><center>" + total_marks + "</center></td><td><center>" + total_obt_marks + "</center></td><td><center>" + total_percentage + "%" + "</center></td></td>")
    document.write("</table>")
  }

  else
  {
    alert("Invalid Input!");
  }
}

else
{
  alert("Invalid Input!");
}