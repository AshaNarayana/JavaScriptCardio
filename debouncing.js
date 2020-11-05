let counter = 0;
const getData = (data) => {
  console.log("fetching data", counter++);
};

const debounce = (fn, d) => {
  let timer;
  return function () {
    clearTimeout(timer);
    let context = this;
    let args = arguments;
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, d);
  };
};
const callDebounce = debounce(getData, 300);
