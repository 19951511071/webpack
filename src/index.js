import x from './x.js'
import png from './assets/1.png'
console.log(png)

const app1 = document.querySelector("#app1")
app1.innerHTML = `

<img src = "${png}">

`
const button = document.createElement('button')
button.textContent = "懒加载"

button.onclick = () => {
    const promise = import ('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log("懒加载失败")
    })
}
app1.appendChild(button)