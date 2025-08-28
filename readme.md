### **1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

- **getElementById** : selects a single element with a specific id name.
- **getElementByClassName** : selects multiple elements with a specific class name and puts them into an array like object.
- **querySelector** : it is a universal selector. if used '.' (dot), it selects multiple elements with the specific class name. if used '#' (hash), it selects a single element with the specific id name.
- **querySelectorAll** : selects multiple elements with a specific class name.

### **2. How do you create and insert a new element into the DOM**?

let's say we want to create and insert a child element in a parent element. the javascript code follows:

    const child = document.createElement('div');
    child.innerHTML = 'This is a child div';
    const parent = document.getElementById('parent');
    parent.appendChild(child);

### 3. What is **Event Bubbling** and how does it work?

Event Bubbling is tracking an element from the top of html to its last position in the document object model.

If the positioning of an element looks like this:

    <html>
        <head></head>
        <body id="body">
            <ul id="ul">
                <li>item-1</li>
                <li id="item2">item-2</li>
                <li>item-3</li>
                <li>item-5</li>
            </ul>

            <script>
                const array = ['body', 'ul', 'item2'];

                for (let element of array) {
                    document.getElementById(`${element}`).addEventListener('click', function() {
                        console.log(`${element} clicked`);
                    });
                }
        </body>
    </html>

if we click on item-2, it will console:

    item2 clicked
    ul clicked
    body clicked

because item2 is inside ul, and then ul is inside body. This way, it tracks item-2 to the top of the document tree.

### **4. What is Event Delegation in JavaScript? Why is it useful?**
