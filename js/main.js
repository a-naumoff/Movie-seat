window.onload = function() {

  const $seat = document.querySelector('.container');
  const $select = document.getElementById('select');
  const $count = document.getElementById('count');
  const $total = document.getElementById('total');
  let countClick = 0;
  let countChange = $select.options[0].value;

  $select.addEventListener('change', e => {
    countChange = e.target.value;
    $total.innerHTML = `${countClick * countChange}`;
  })

  $seat.addEventListener('click', e => {
    if (e.target.parentNode.className !== 'row') {
      return false;
    } else if (e.target.className === 'seat') {
      e.target.classList.add('selected');
      countClick++;
    } else if (e.target.className === 'seat selected') {
      e.target.classList.remove('selected');
      countClick--;
    }
    $count.innerHTML = `${countClick}`;
    $total.innerHTML = `${countClick * countChange}`;
  })

}