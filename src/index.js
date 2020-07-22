let html = document.querySelector("#demo")
let style = document.querySelector("#style")
let div1 = document.querySelector("#div1")
let str = `
/*你好，我是lucidity
是一名前端工程师
接下来让你看看我用原生js写的太极*/
#div1 {
    border: 1px solid black;
    height: 400px;
    width: 400px;
}
/*
接下来我把div变成一个八卦图
注意，看好了
首先，把div变成圆

*/
#div1 {
    border-radius:50%;
    box-shadow:rgba(0,0,0,.5)
}
/*
八卦是阴阳形成的
*/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
加一黑一白两个球
*/
#div1::before {
    height: 200px;
    width: 200px;
    top:0;
    left:50%;
    border-radius:50%;
    transform:translateX(-50%);
    background-color: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    height: 200px;
    width: 200px;
    bottom:0;
    left:50%;
    border-radius:50%;
    transform:translateX(-50%);
    background-color: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let str2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (str[n] === "\n") {
            str2 += "<br>";
        } else if (str[n] === " ") {
            str2 += "&nbsp;";
        } else {
            str2 += str[n]
        }
        html.innerHTML = str2;
        style.innerHTML = str.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);

        if (n < str.length - 1) {
            n += 1;
            step();
        }
    }, 30)
}
step();
