function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.product_ul');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
    <li class="product_li">
        <span>
            <img class="item__thumbnail" src="${item.image}" alt="${item.type}">
        </span>
        <strong class="item__description">${item.gender}, ${item.size}</strong>
    </li>
  `;
}

function onButtonClick(event, items) {
  const target = event.target.closest('[data-key]');
  if (!target) return;

  const { key, value } = target.dataset;
  if (!key || !value) return;

  const filtered = items.filter(item => item[key] === value);
  displayItems(filtered);
}

function setEventListener(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.category_list');

  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListener(items);
  })
  .catch(console.log);