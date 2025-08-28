1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans: They are all used to select the element from the HTML document. getElementById is used for select a single element which is based on unique id attribute. It returns a single DOM element object if found.
   getElementsByClassName is used for select all HTML elements that have same class name. it returns HTML collections.
   querySelector select first element that matches the css selector like #id, .class, [attribute], tag name.
   querySelctorAll used for select all the elements that matches the css selector and return a nodelist if it's matched.
2. How do you **create and insert a new element into the DOM**?
   Ans: To create a new element we use "createElement()" method and for insert the element we use "appendChild()" method.
   Example:
   // select a HTML element where we insert the new element
   const card = document.querySelector(".card"); // it's select the first card of the dom
   // create new div element
   const div = document.createElement("div");
   card.appendChild(div); // append or insert the div into the card
3. What is **Event Bubbling** and how does it work?
   Ans: Event Bubbling is a concept in JavaScript when an event starts from the target element(like button click) and moves upword the parent element one by one until it reaches the document.
4. What is **Event Delegation** in JavaScript? Why is it useful?
   Ans: Event Delegation is technique in JavaScript where instead of adding or using multiple event listener to child elements, we use single event listener to their parent element and use event bubbling to ditect which child element triggured the event. it is useful to use less memory, increase performance instead of use multiple event listener and handling event dynamically added element.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Ans: preventDefault() stops the default behavior of the browser like form submission. And stopPropagation() stops the default bubbling behavior, event can't go to the parent element.
