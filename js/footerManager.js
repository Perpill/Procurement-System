class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Procurement System</span>
                    </div>
                </div>
            </footer>`;
  }
}

customElements.define("special-footer", SpecialFooter);
// add another class if neccesary
