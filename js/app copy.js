const navigationMenu = document.querySelector('.navigation__menu');
const navigationMenuItems = document.querySelectorAll('.navigation__menu_item');
const navigationLinks = document.querySelectorAll('.navigation_link');

const reportElement = document.querySelector('#reports');

function createSvg() {
  let xmlns = "http://www.w3.org/2000/svg";
  let boxWidth = 26;
  let boxHeight = 26;

  let svgElem = document.createElementNS(xmlns, 'svg');
  svgElem.setAttributeNS(null, 'viewBox', `0 0 ${boxWidth} ${boxHeight}`);
  svgElem.setAttributeNS(null, 'width', 24);
  svgElem.setAttributeNS(null, 'height', 24);
  // svgElem.setAttributeNS(null, 'fill', 'none');
  // svgElem.setAttributeNS(null, 'stroke', '#ffffff');
  svgElem.setAttributeNS(null, 'stroke-width', '2');
  svgElem.setAttributeNS(null, 'stroke-linecap', 'round');
  svgElem.setAttributeNS(null, 'stroke-linejoin', 'round');
  svgElem.style.dysplay = 'flex';

  let line1 = document.createElementNS(xmlns, 'line');
  line1.setAttributeNS(null, 'x1', '18');
  line1.setAttributeNS(null, 'y1', '20');
  line1.setAttributeNS(null, 'x2', '18');
  line1.setAttributeNS(null, 'y2', '10');
  svgElem.appendChild(line1);

  let line2 = document.createElementNS(xmlns, 'line');
  line2.setAttributeNS(null, 'x1', '12');
  line2.setAttributeNS(null, 'y1', '20');
  line2.setAttributeNS(null, 'x2', '12');
  line2.setAttributeNS(null, 'y2', '4');
  svgElem.appendChild(line2);

  let line3 = document.createElementNS(xmlns, 'line');
  line3.setAttributeNS(null, 'x1', '6');
  line3.setAttributeNS(null, 'y1', '20');
  line3.setAttributeNS(null, 'x2', '6');
  line3.setAttributeNS(null, 'y2', '14');
  svgElem.appendChild(line3);

  // console.log(svgElem.getAttributeNS('viewbox'))
  return svgElem
}

// const iconReports = createSvg();
// const imageReports = document.createElement('div');
// imageReports.className = 'bar-chart';
// iconReports.className= 'bar-chart';
// imageReports.prepend(iconReports);
// reportElement.appendChild(imageReports);


navigationMenu.addEventListener('click', (event) => {
  const { target } = event;
  const isNavButton = target.closest('.navigation__menu_item');
  if (isNavButton) {
    navigationMenuItems.forEach((item) => {
      item.classList.remove('active');
    })
  }
  isNavButton.classList.add('active');
})