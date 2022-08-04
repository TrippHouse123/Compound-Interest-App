// Compound Interest Formula With Future Value
// CI = P * (1 + r/n) ** nt 
// FV = PMT * (((1 + r/n) ** nt - 1) / (r/n))


function compoundInterest() {
    // Variables are doing what they are supposed to do.
    let P = document.getElementById('principal').value 
    let R = document.getElementById('rate').value
        R = R / 100
    let T = document.getElementById('duration').value
    let N = document.getElementById('frequency').value
    let PMT = document.getElementById('addition').value

    // Normal CI is working like it is supposed to.
    let CI = P * (1 + (R / N)) ** (N * T)

    // Normal FV is working like it is supposed to.
    let FV = PMT * (((1 + R / N) ** (N * T) - 1) / (R / N))

    // CI + FV is the total amount of compounded interest over the course of the specified duration
    let total = CI + FV

    total = total.toFixed(2)
    total = Number(total)
    total = total.toLocaleString("en-US")

    const display = document.getElementById('display')
        display.textContent = "$" + total
}
