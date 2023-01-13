[1, 2, 3, 4, 5].every(v => {
    if (v > 3) {
      return false;
    }
  
    console.log(v);
    // Make sure you return true. If you don't return a value, `every()` will stop.
    return true;
  });