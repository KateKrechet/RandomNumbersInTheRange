let in1 = document.getElementById('in1')
let in2 = document.getElementById('in2')
let butok = document.getElementById('ok')
let out_res = document.getElementById('out_number')

function f_rand() {
    let min = Math.ceil(in1.value)//округление в большую сторону
    let max = Math.floor(in2.value)//округление в меньшую сторону
    let r = Math.floor(Math.random() * (max - min + 1)) + min //максимум и минимум включаются
    out_res.innerHTML = r
}

butok.onclick = f_rand