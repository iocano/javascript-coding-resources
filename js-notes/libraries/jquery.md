# JQuery

## Optimization

### Event delegation vs direct attach

```javascript
// event delegation: attach the event handler to the parent element (#customer)
// and then delegate the click event handler to its descendants '.js-delete'
$("#customers").on("click", ".js-delete", onDeleteClick);
// direct attach: attach event handler to each '.js-delete' element that are
// descendent of '#customer'
$("#customers .js-delete").on("click", onDeleteClick);
```

Event delegation offers improve performance:

- A single event handler is attached to the parent element, and then delegated
  its descendants reducing the number of event handlers attached to individual
  child elements.
- Dynamically Added Elements: Event delegation works for dynamically added

Direct attach:

- Performance Impact: If there are a large number of .js-delete elements,
  attaching individual event handlers to each of them could impact performance,
  especially in cases where the elements are frequently updated or manipulated.
- No Support for Dynamically Added Elements: Elements added to the page after
  the event handler is attached won't automatically have the event handler.
  You'd need to reattach the event handler to these new elements.
