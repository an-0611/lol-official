function getParam(paramName, url) {
    const href = url || window.location.href;
    const name = paramName.replace(/[[]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
  function camelizeStr(str) {
    return str.replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase());
  }
  
  function snakifyStr(str) {
    return str.replace(/(?:^|\.?)([A-Z])/g, (_, x) => `_${x.toLowerCase()}`);
  }
  
  function convertCase(convertFunc) {
    function converter(thing) {
      if (Array.isArray(thing)) {
        return thing.map((i) => converter(i));
      }
      if (thing instanceof Object) {
        const newObj = {};
        Object.keys(thing).forEach((k) => {
          newObj[convertFunc(k)] = converter(thing[k]);
        });
        return newObj;
      }
      return thing;
    }
    return converter;
  }
  
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function checkRes(res) {
    if (res && 'error' in res) {
      const errMsg = { name: 'apiErr', msg: res.error };
      throw errMsg;
    }
    return res.data;
  }
  
  function catchErr(err) {
    if (err.name === 'apiErr') {
      return err.msg;
    }
    if (err.response && err.response.status) {
      return `${err.response.status} ${err.response.statusText}`;
    }
    return err;
  }
  
  function leadingZero(num, size) {
    let s = `${num}`;
    while (s.length < size) s = `0${s}`;
    return s;
  }
  
  function timeToYYMMDDHHMM(time) {
    const fillTime = new Date(time * 1000);
    const years = fillTime.getFullYear();
    const months = fillTime.getMonth() + 1;
    const days = fillTime.getDate();
    const hours = fillTime.getHours();
    const minutes = fillTime.getMinutes();
    return `${years}/${leadingZero(months, 2)}/${leadingZero(
      days,
      2,
    )} ${leadingZero(hours, 2)}:${leadingZero(minutes, 2)}`;
  }
  
  function timeToHHMMDDMMYY(time) {
    const fillTime = new Date(time * 1000);
    const years = fillTime.getFullYear();
    const months = fillTime.getMonth() + 1;
    const days = fillTime.getDate();
    const hours = fillTime.getHours();
    const minutes = fillTime.getMinutes();
    return `${leadingZero(hours, 2)}:${leadingZero(minutes, 2)} ${leadingZero(
      days,
      2,
    )}/${leadingZero(months, 2)}/${years}`;
  }
  
  function getScrollTop() {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.getElementById('app')) {
      scrollTop = document.getElementById('app').scrollTop;
    }
    return scrollTop;
  }
  
  function getClientHeight() {
    let clientHeight = 0;
    if (
      document.getElementById('app').clientHeight &&
      document.documentElement.clientHeight
    ) {
      clientHeight = Math.min(
        document.getElementById('app').clientHeight,
        document.documentElement.clientHeight,
      );
    } else {
      clientHeight = Math.max(
        document.getElementById('app').clientHeight,
        document.documentElement.clientHeight,
      );
    }
    return clientHeight;
  }
  
  function zeroPadding(key, lengthLimit) {
    if (key && key.length >= lengthLimit) return key;
    let newKey = '';
    while (newKey.length + key.length < lengthLimit) {
      newKey += '0';
    }
    return newKey + key;
  }
  
  function objectFilter(
    obj,
    predicate,
    predicate1 = (item) => item,
    predicate2 = (item) => item,
  ) {
    if (typeof predicate !== 'function')
      throw new Error('At least one predicate function!');
    return Object.keys(obj)
      .filter((key) => {
        return (
          predicate(obj[key]) && predicate1(obj[key]) && predicate2(obj[key])
        );
      })
      .reduce(function (res, key) {
        const result = ((res[key] = obj[key]), res);
        return result;
      }, {});
  }
  
  function isInclude(parent, child) {
    return child.every((val) => parent.includes(val));
  }
  
  function calculatePos(event, initialVal) {
    const width = window.innerWidth || document.body.clientWidth;
    const height = window.innerHeight || document.body.clientHeight;
    const result = {};
    let value = initialVal;
    if (event.clientX < width / 2) {
      // Adjust to prevent overflow
      if (event.clientX + 475 > width) {
        value -= event.clientX + 475 - width;
      }
      result.left = `${value}px`;
    } else {
      // Adjust to prevent overflow
      if (event.clientX - 475 < 0) {
        value += event.clientX - 475;
      }
      result.right = `${value}px`;
    }
    if (event.clientY < height / 2) {
      result.top = `${value}px`;
    } else {
      result.bottom = `${value}px`;
    }
    return result;
  }
  
  function resetAnimation({ className }) {
    const elem = document.getElementsByClassName(className);
    const toggleClassName = (args) => {
      return Array.from(args).forEach((el) => {
        el.classList.remove(className);
        setTimeout(() => {
          el.classList.add(className);
        }, 0);
      });
    };
    toggleClassName(elem);
  }
  
  export default {
    getParam,
    camelizeStr,
    snakifyStr,
    delay,
    camelizeKeys: convertCase(camelizeStr),
    snakifyKeys: convertCase(snakifyStr),
    checkRes,
    catchErr,
    timeToYYMMDDHHMM,
    timeToHHMMDDMMYY,
    getScrollTop,
    getClientHeight,
    zeroPadding,
    objectFilter,
    isInclude,
    calculatePos,
    resetAnimation,
  };
  