//  - метод click назначаем на .arena
//  - делаем проверку на (td) и возвращаем его (id)
//  - по этому (td) находим его родителя (tr) и возвращаем его (id)
//  - по этому (tr) находим его родителя (table) и возвращаем его (id)

const boardSpan = document.querySelector('.board__selected-seat');
const arena = document.querySelector('.arena');
// const seat = document.querySelector('.sector__seat');

const seatsNumber = (event) => {
  let seat;
  let line;
  let sector;
  if (event.target.tagName !== 'TD') {
    return;
  } else {
    seat = event.target.dataset.id;
    // console.log(seat);

    let lineOfSeat = event.target.closest('tr');
    line = lineOfSeat.dataset.id;
    // console.log(line);

    let sectorOfLine = lineOfSeat.closest('table');
    sector = sectorOfLine.dataset.id;
    // console.log(sector);

    boardSpan.textContent = `S ${sector} - L ${line} - S ${seat}`;
  }
};

arena.addEventListener('click', seatsNumber);
// console.log(seat);
