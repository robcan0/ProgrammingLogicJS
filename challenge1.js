// Hero Variable
let hero = {
    name: "Brock",
    xp: 10001
};

// Operators and decision structure for determining hero level based on XP
function determineLevel(xp) {
    if (xp < 1000) {
        return "Iron";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Silver";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Gold";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platinum";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendant";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Immortal";
    } else if (xp >= 10001) {
        return "Radiant";
    }
}

// Final message display
console.log("The Hero named " + hero.name + " is at the level of " + determineLevel(hero.xp) + ".");
