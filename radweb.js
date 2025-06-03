const moduleMap = {
  1: "RAD_research",
  2: "RAD_archive1",
  3: "RAD_archive2",
  4: "RAD_archive3",
  5: "RAD_diffusion1",
  6: "RAD_diffusion2",
  7: "RAD_diffusion3",
  8: "RAD_diffusion4",
  9: "null"
};

const linkMap = {
  1: "radresearch.html",
  2: "archive.html",
  3: "archive.html",
  4: "archive.html",
  5: "diffusion.html",
  6: "diffusion.html",
  7: "diffusion.html",
  8: "diffusion.html",
};

// ✨ row2: 테스트용 예시
const row1 = [
9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9, 9,9,9,9,
];
const row2 = [
  9,9,9,2, 5, 9, 2, 1, 9, 6, 5, 9,
  2, 1, 9, 6, 5, 9, 2, 5, 9,
  6, 5, 9, 3, 4, 9, 9,9,9,9,
];
const row3 = [
  9,9,9,2, 8, 9, 2, 1, 9, 7, 9, 9,
  2, 1, 9, 1, 1, 9, 2, 8, 9,
  3, 9, 9, 1, 1, 9, 9, 9,9,9,
];
const row4 = [
  9,9,9,2, 5, 9,2,9,9,9,5,9,2,9,9,3,4,9,2,5,9,3,9,9,3,4,9, 9, 9,9,9,
];
const row5 = [
9,9,9,2,4,9,2,1,9,7,8,9,2,1,9,3,4,9,2,4,9,7,8,9,3,4,9, 9, 9,9,9,
];
const row6 = [
9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9, 9, 9,9,9,
];
const row7 = [
9,9,9,6,5,9,2,5,9,6,5,9,3,4,9,2,9,3,4,9,2,1,9,9,9,9,9,9,9,9,9,
];
const row8 = [
9,9,9,1,1,9,2,8,9,3,9,9,1,1,9,2,9,3,4,9,2,1,9,9,9,9,9,9,9,9,9,
];

const row9 = [
9,9,9,3,4,9,2,5,9,3,9,9,3,4,9,2,9,2,2,9,2,9,9,9,9,9,9,9,9,9,9,
];

const row10 = [
9,9,9,3,4,9,2,4,9,7,8,9,3,4,9,2,9,4,9,9,2,1,9,9,9,9,9,9,9,9,9,];

const row11 = [
9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9, 9,9,9,9,
];

const row12 = [
9,9,9,2,5,9,2,9,2,1,9,2,1,9,3,4,9,6,5,9,2,9,6,5,9,5,9,4,9,9,9,
];

const row13 = [
9,9,9,2,4,9,2,9,2,1,9,2,1,9,3,4,9,7,9,9,2,9,3,4,9,3,7,4,9,9,9,
];
const row14 = [
9,9,9,2,4,9,2,9,2,9,9,2,9,9,3,4,9,9,5,9,2,9,3,4,9,3,9,5,9,9,9,
];
const row15 = [
9,9,9,2,8,9,2,9,2,9,9,2,9,9,7,8,9,7,8,9,2,9,7,8,9,3,9,4,9,9,9,]

const row16 = [
9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9, 9,9,9,9,
];

function createRow(modules) {
  const row = document.createElement("div");
  row.classList.add("row");

  modules.forEach(item => {
    if (item === null) {
      const empty = document.createElement("div");
      empty.className = "cell empty";
      row.appendChild(empty);
    } else {
      const tile = document.createElement("img");
      tile.className = "tile";
      tile.src = `SVG/${moduleMap[item]}.svg`;
      tile.setAttribute("data-link", linkMap[item]);
      tile.onclick = () => window.location.href = linkMap[item];
      row.appendChild(tile);
    }
  });

document.querySelectorAll(".tile").forEach(tile => {
  tile.addEventListener("mouseenter", (e) => {
    const rect = tile.getBoundingClientRect();
    const centerX = rect.left + rect.width ;
    const centerY = rect.top + rect.height ;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // 마우스 위치에 따라 회전 각도 결정
    const rotateX = (-deltaY / rect.height) * 90; // 위아래 기준
    const rotateY = (deltaX / rect.width) * 90;   // 좌우 기준

    tile.style.transition = "transform .2s ";
    tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // 2초 후 원래 상태로 복귀
    setTimeout(() => {
      tile.style.transition = "transform .8s ";
      tile.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }, 1000);
  });
});

  return row;
}

// 💡 줄 추가
const grid = document.getElementById("tileGrid");
grid.appendChild(createRow(row2)); // 둘째줄
grid.appendChild(createRow(row3)); // 3째줄
grid.appendChild(createRow(row4)); // 4째줄
grid.appendChild(createRow(row5)); // 5째줄
grid.appendChild(createRow(row6)); // 6째줄
grid.appendChild(createRow(row7)); // 7째줄
grid.appendChild(createRow(row8)); // 8째줄
grid.appendChild(createRow(row9)); // 9째줄
grid.appendChild(createRow(row10)); // 10째줄
grid.appendChild(createRow(row11)); // 11째줄
grid.appendChild(createRow(row12)); // 12째줄
grid.appendChild(createRow(row13)); // 13째줄
grid.appendChild(createRow(row14)); // 14째줄
grid.appendChild(createRow(row15)); // 15째줄

