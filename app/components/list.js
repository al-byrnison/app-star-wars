export default class ListComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <article class="relative" >
                <div class="absolute -left-6 top-1/2 flex items-center justify-end">
                <div class="w-3 h-3 bg-amber-500 rounded-full border border-amber-500 ml-4 relative"></div>
                    <p class="absolute -left-12 rounded-lg w-[3.5rem] text-center bg-amber-200">${ this.getAttribute('range') }</p>
                </div>
                <ul class="grid grid-cols-3 gap-4 m-4" id="${ this.getAttribute('_id') }">
                
                </ul>
            </article>
      `;
    }
  }
  
  window.customElements.define('list-component', ListComponent);
  