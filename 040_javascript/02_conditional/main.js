const score = 80;

if (score >= 80) {
  console.log("合格！");
} else if (score >= 60) {
  console.log("惜しい！");
} else {
  console.log("不合格！");
}


const age = 20;
const hasTicket = true;

if (age >= 20 && hasTicket) {
  console.log("入場できます！")
}

if (age < 18 || !hasTicket) {
  console.log("入場できません！")
}

