let input = document.getElementById('input-amount')
let lengthEl = document.querySelector('.length')
let volumeEl = document.querySelector('.volume')
let massEl = document.querySelector('.mass')
let convertBtn = document.querySelector('#convert')

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener('click', function() {
    let baseValue = input.valueAsNumber
    let lengthConversion = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    let volumeConversion = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * literToGallon).toFixed(3)} liters`  
    let massConversion = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * kiloToPound).toFixed(3)} kilos`
    lengthEl.textContent = lengthConversion
    volumeEl.textContent = volumeConversion
    massEl.textContent = massConversion
})