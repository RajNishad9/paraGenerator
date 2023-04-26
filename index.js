const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWords = (n) => {
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str = "";
  for (let i = 0; i < n; i++) {
    const random = (Math.random() * 25).toFixed(0);
    str += string[random];
  }
  return str;
};

const generatePara = () => {
  const numOfWords = Number(input.value);
  const para = document.createElement("p");
  let data = "";
  for (let i = 0; i < numOfWords; i++) {
    let randomNum = (Math.random() * 15).toFixed(0);
    data += generateWords(randomNum);
    data += " ";
  }

  para.innerText = data;
  para.setAttribute("class", "paras");
  container.append(para);
};
