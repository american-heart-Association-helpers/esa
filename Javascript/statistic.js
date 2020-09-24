function loadStatisticsAccelerator() {
    document.getElementById("sA1").textContent = "+" + format(freeUpgradeAccelerator, 0, false)
    document.getElementById("sA2").textContent = "+" + format(totalAcceleratorBoost * (4 + 2 * player.researches[18] + 2 * player.researches[19] + 3 * player.researches[20] + cubeBonusMultiplier[1]), 0, false)
    document.getElementById("sA3").textContent = "+" + format(Math.floor(Math.pow(rune1level * effectiveLevelMult / 10, 1.1)), 0, true)
    document.getElementById("sA4").textContent = "x" + format(1 + rune1level * 1 / 200 * effectiveLevelMult, 3, true)
    document.getElementById("sA5").textContent = "x" + format(Math.pow(1.01, player.upgrades[21] + player.upgrades[22] + player.upgrades[23] + player.upgrades[24] + player.upgrades[25]), 3, true)
    document.getElementById("sA6").textContent = "x" + format(Math.pow(1.01, player.achievements[60] + player.achievements[61] + player.achievements[62]), 3, true)
    document.getElementById("sA7").textContent = "x" + format(1 + 1 / 5 * player.researches[1], 3, true)
    document.getElementById("sA8").textContent = "x" + format(1 + 1 / 20 * player.researches[6] + 1 / 25 * player.researches[7] + 1 / 40 * player.researches[8] + 3 / 200 * player.researches[9] + 1 / 200 * player.researches[10], 3, true)
    document.getElementById("sA9").textContent = "x" + format(1 + 1 / 20 * player.researches[86], 3, true)
    document.getElementById("sA10").textContent = "x" + format(1.25, 3, true)
    document.getElementById("sA11").textContent = "^" + format(maladaptivePower[player.usedCorruptions[2]], 3, true)
    document.getElementById("sA12").textContent = format(freeAccelerator, 0, true)
}

function loadStatisticsMultiplier() {
    document.getElementById("sM1").textContent = "+" + format(freeUpgradeMultiplier, 0, true)
    document.getElementById("sM2").textContent = "+" + format(Math.floor(Math.floor(rune2level / 10 * effectiveLevelMult) * Math.floor(10 + rune2level / 10 * effectiveLevelMult) / 2) * 100 / 100, 0, true)
    document.getElementById("sM3").textContent = "x" + format(1 + rune2level / 200 * effectiveLevelMult, 3, true)
    document.getElementById("sM4").textContent = "x" + format(Math.pow(1.01, player.upgrades[21] + player.upgrades[22] + player.upgrades[23] + player.upgrades[24] + player.upgrades[25]) * (1 + player.upgrades[34] * 3 / 100) * (1 + player.upgrades[34] * (2 / 103)), 3, true)
    document.getElementById("sM5").textContent = "x" + format(Math.pow(1.01, player.achievements[57] + player.achievements[58] + player.achievements[59]), 3, true)
    document.getElementById("sM6").textContent = "x" + format(1 + 1 / 5 * player.researches[2], 3, true)
    document.getElementById("sM7").textContent = "x" + format(1 + 1 / 20 * player.researches[11] + 1 / 25 * player.researches[12] + 1 / 40 * player.researches[13] + 3 / 200 * player.researches[14] + 1 / 200 * player.researches[15], 3, true)
    document.getElementById("sM8").textContent = "x" + format(1 + 1 / 20 * player.researches[87], 3, true)
    document.getElementById("sM9").textContent = "x" + format(1 + 1 / 25 * (player.antUpgrades[5] + bonusant5), 3, true)
    document.getElementById("sM10").textContent = "x" + format(cubeBonusMultiplier[2], 3, true)
    document.getElementById("sM11").textContent = "x" + format(1.25, 3, true)
    document.getElementById("sM12").textContent = "^" + format(divisivenessPower[player.usedCorruptions[1]], 3, true)
    document.getElementById("sM13").textContent = format(freeMultiplier, 3, true)
}

function loadStatisticsCubeMultipliers() {
    const arr = calculateCubeMultiplier(false).slice(0, -1);
    const acc = [2, 4, 4, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 5, 4]
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(`sCM${i+1}`).textContent = `x${format(arr[i], acc[i], true)}`;
    }
    document.getElementById("sCMT").textContent = `x${format(calculateCubeMultiplier(true), 3)}`;
}