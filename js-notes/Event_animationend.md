# Animation end event

```css
/* Define the CSS class for the fade-in animation */
.fade-in {
  /* Initial opacity of 0 to hide the element */
  opacity: 0;

  /* Apply the 'fadeIn' animation with a duration of 1s and ease-in-out timing */
  animation: fadeIn 1s ease-in-out forwards;
}

/* Define the keyframes for the 'fadeIn' animation */
@keyframes fadeIn {
  /* Animation starts from opacity 0 */
  from { opacity: 0; }
  /* Animation ends with opacity 1 */
  to { opacity: 1; }
}

```

```javascript
// Get a reference to the element to be faded in
const element = document.getElementById('fade-in-div');

// Get a reference to the button triggering the animation
const showBtn = document.getElementById('show-button');

// Add an event listener to the button's 'click' event
showBtn.addEventListener('click', () => {
  // Add the 'fade-in' class to the element to trigger the fade-in animation
  element.classList.add('fade-in');
});

// Add an 'animationend' event listener to the element
element.addEventListener('animationend', (e) => {
  // Log a message when the animation ends, including the animation name
  console.log(`Animation '${e.animationName}' ends`);
});
```
