# React 19 Bug : Key

# Explanations :

It seems to have some weird behavior introduced in the React 19 RC update. When we iterate over a list to create components and put a unique id as a key, when sorting certain elements are rerendered. Which was not the case in version 18.

# The effect :

```js
//In each item

useEffect(() => {
  const doc = ref.current;
  if (!doc) {
    return;
  }

  const timeout = setTimeout(() => {
    doc.animate(
      [{ outlineColor: "#d20f39" }, { outlineColor: "transparent" }],
      {
        duration: 300,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        iterations: 2,
      }
    );
  }, 500);

  return () => {
    clearTimeout(timeout);
  };
}, [item.title]);
```

# React 18.3.1 :

[![react-18](/public/thumbnail.png)](/public/react-18.mp4)

# React 19 RC :

[![react-19](/public/thumbnail.png)](/public/react-19.mp4)
