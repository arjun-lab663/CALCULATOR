/*
1.Grab the dom elemnts
2.Do calculations
3.event listeners
*/

const addBtn = document.querySelector('.add-btn')
const subBtn = document.querySelector('.sub-btn')
const mulBtn = document.querySelector('.mul-btn')
const divBtn = document.querySelector('.div-btn')
const sqaBtn = document.querySelector('.sqa-btn')
const quadBtn = document.querySelector('.quad-btn')
const kabeBtn = document.querySelector('.kabe-btn')
const resultEl = document.querySelector('.result')
const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const red = document.querySelector('.blood')
const sea = document.querySelector('.sea')
const container = document.querySelector('.container')
const buttons = document.querySelectorAll('button')
const kabe2 = document.querySelector('.kabe2-btn')

const getstf = (somestf) => {
    resultEl.textContent = somestf
}

const greetings = () => {
    getstf('Welcome')
}

const add = () => {
    let n1 = prompt('What is the first number?')
    let n2 = prompt('What is the second number?')
    let result = +n1 + +n2
    getstf(result)
}

const sub = () => {
    let n1 = prompt('What is the first number?')
    let n2 = prompt('What is the second number?')
    let result = +n1 - +n2
    getstf(result)
}

const mul = () => {
    let n1 = prompt('What is the first number?')
    let n2 = prompt('What is the second number?')
    let result = +n1 * +n2
    getstf(result)
}

const div = () => {
    let n1 = prompt('What is the first number?')
    let n2 = prompt('What is the second number?')
    let result = +n1 / +n2
    getstf(result)
}

const sqa = () => {
    let n = prompt('What is the number?')
    let result = n * n
    getstf(result)
}

const kab = () => {
    let n = prompt('What is the number?')
    let result = n * n * n
    getstf(result)
}

const solve = (a, b, c) => {
    let result = (((-1 * b) + Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a));
    let result2 = (((-1 * b) - Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a));

    return result + "<br>" + result2;
}

const quad = () => {
    const n1 = prompt('What is the first number?')
    const n2 = prompt('What is the second number?')
    const n3 = prompt('What is the third number?')
    let res = solve(+n1, +n2, +n3)
    resultEl.innerHTML = res
}

const cuberoot = (x) => {
    let y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y;
}


const solveCubic = (a, b, c, d) => {
    if (Math.abs(a) < 1e-8) { // Quadratic case, ax^2+bx+c=0
        a = b;
        b = c;
        c = d;
        if (Math.abs(a) < 1e-8) { // Linear case, ax+b=0
            a = b;
            b = c;
            if (Math.abs(a) < 1e-8) // Degenerate case
                return [];
            return [-b / a];
        }

        var D = b * b - 4 * a * c;
        if (Math.abs(D) < 1e-8)
            return [-b / (2 * a)];
        else if (D > 0)
            return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
        return [];
    }

    // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
    var p = (3 * a * c - b * b) / (3 * a * a);
    var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    var roots;

    if (Math.abs(p) < 1e-8) { // p = 0 -> t^3 = -q -> t = -q^1/3
        roots = [cuberoot(-q)];
    } else if (Math.abs(q) < 1e-8) { // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
        roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
    } else {
        var D = q * q / 4 + p * p * p / 27;
        if (Math.abs(D) < 1e-8) { // D = 0 -> two roots
            roots = [-1.5 * q / p, 3 * q / p];
        } else if (D > 0) { // Only one real root
            var u = cuberoot(-q / 2 - Math.sqrt(D));
            roots = [u - p / (3 * u)];
        } else { // D < 0, three roots, but needs to use complex numbers/trigonometric solution
            var u = 2 * Math.sqrt(-p / 3);
            var t = Math.acos(3 * q / p / u) / 3; // D < 0 implies p < 0 and acos argument in [-1..1]
            var k = 2 * Math.PI / 3;
            roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - 2 * k)];
        }
    }

    // Convert back from depressed cubic
    for (var i = 0; i < roots.length; i++)
        roots[i] -= b / (3 * a);

    return roots;
}

const kabe = () => {
    const n1 = prompt('What is the first number?')
    const n2 = prompt('What is the second number?')
    const n3 = prompt('What is the third number?')
    const n4 = prompt('What is the fourth number?')
    getstf(solveCubic(n1, n2, n3, n4))
}

const themeDark = () => {
    container.style.color = 'white'
    container.style.background = 'black'
    buttons.forEach(button => {
        button.style.background = 'white'
        button.style.color = 'black'
    })
}

const themeLight = () => {
    container.style.color = 'black'
    container.style.background = 'white'
    buttons.forEach(button => {
        button.style.background = 'black'
        button.style.color = 'white'
    })
}

const themeRed = () => {
    container.style.color = 'black'
    container.style.background = 'pink'
    buttons.forEach(button => {
        button.style.background = 'black'
        button.style.color = 'red'
    })
}

const themeSea = () => {
    container.style.color = 'black'
    container.style.background = 'blue'
    buttons.forEach(button => {
        button.style.background = 'black'
        button.style.color = 'lightblue'
    })
}


greetings()


addBtn.addEventListener('click', add)
subBtn.addEventListener('click', sub)
mulBtn.addEventListener('click', mul)
divBtn.addEventListener('click', div)
sqaBtn.addEventListener('click', sqa)
quadBtn.addEventListener('click', quad)
kabeBtn.addEventListener('click', kabe)

dark.addEventListener('click', themeDark)
light.addEventListener('click', themeLight)
red.addEventListener('click', themeRed)
sea.addEventListener('click', themeSea)
kabe2.addEventListener('click', kab)