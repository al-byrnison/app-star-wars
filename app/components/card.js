export default class CardComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="block w-full p-4 bg-neutral-50 hover:bg-${ this.getAttribute('color') }-50 rounded-lg shadow-md shadow-amber-100/50 flex items-start gap-4" id="${ this.getAttribute('_id') }">
        <div class="w-6 h-6 bg-${ this.getAttribute('color') }-500 rounded-full flex-none mt-1"></div>
        <div class="grow">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">${ this.getAttribute('title') }</h5>
          <p class="text-sm font-normal text-gray-700 dark:text-gray-400">${ this.getAttribute('text') }</p>
        </div>        
      </div>

    `;
  }
}

window.customElements.define('card-component', CardComponent);
