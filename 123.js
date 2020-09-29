const name = "jack";
const show = function (string, ...arg) {
    console.log(string, arg);
    return string.map(function (str, i) {
    return `${str}${arg[i] ? `<span>${arg[i]}</span>}`:''}`;
    });
};

const sentence = show `你好，${name}，你的晚餐已經準備好囉`;
console.log(sentence);