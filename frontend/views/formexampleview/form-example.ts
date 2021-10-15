import {html, LitElement, customElement} from 'lit-element';
import '@polymer/iron-icon/iron-icon';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-combo-box';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-text-field/vaadin-email-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';

@customElement('form-example')
export class FormExample extends LitElement {
  createRenderRoot() {
    // Do not use a shadow root
    return this;
  }

  render() {
    return html`
      <main class="grid gap-xl items-start justify-center max-w-screen-lg mx-auto pb-l px-l">
      <h2 class="mb-0 mt-xl text-3xl">Form example</h2>
      <p class="mb-xl mt-0 text-secondary">All fields are required unless otherwise noted</p>
      <div class="flex flex-row gap-m items-start">
        <section class="flex flex-col flex-grow">
          <section class="flex flex-col mb-xl mt-m">
            <h3 class="mb-m mt-s text-2xl">Order details</h3>
            <vaadin-text-field class="mb-s" label="Name" pattern="[\\p{L} \\-]+" required></vaadin-text-field>
            <vaadin-email-field class="mb-s" label="Email address" required></vaadin-email-field>
            <vaadin-text-field class="mb-s" label="Phone number" pattern="[\\d \\-\\+]+" required></vaadin-text-field>
            <p class="m-0 text-s text-secondary">Checkout 2/3</p>
            <h3 class="mb-m mt-s text-2xl">Shipping address</h3>
            <vaadin-combo-box class="mb-s" id="countrySelect" label="Country" required></vaadin-combo-box>
            <vaadin-text-area
              class="mb-s"
              id="address"
              label="Street address"
              maxlength="200"
              required
            ></vaadin-text-area>
            <div class="flex flex-wrap gap-m">
              <vaadin-text-field
                class="mb-s"
                label="Postal code"
                maxlength="10"
                pattern="[\\d \\p{L}]*"
                required
              ></vaadin-text-field>
              <vaadin-text-field class="flex-grow mb-s" label="City" required></vaadin-text-field>
            </div>
            <vaadin-combo-box
              allow-custom-value
              class="mb-s"
              id="stateSelect"
              label="State"
              required
            ></vaadin-combo-box>
            <vaadin-checkbox class="mt-s">Billing address is the same as shipping address</vaadin-checkbox>
            <vaadin-checkbox>Remember address for next time</vaadin-checkbox>
          </section>
        </section>
          
        <aside class="bg-contrast-5 box-border p-l rounded-l" style="width: 320px;">
          <header class="flex items-center justify-between mb-m">
            <h3 class="m-0">Order</h3>
            <vaadin-button theme="tertiary-inline">Edit</vaadin-button>
          </header>
          <ul class="list-none m-0 p-0 flex flex-col gap-m">
            <li class="flex justify-between">
              <div class="flex flex-col">
                <span>Vanilla cracker</span>
                <span class="text-s text-secondary">With wholemeal flour</span>
              </div>
              <span>$7.00</span>
            </li>
            <li class="flex justify-between">
              <div class="flex flex-col">
                <span>Vanilla blueberry cake</span>
                <span class="text-s text-secondary">With blueberry jam</span>
              </div>
              <span>$8.00</span>
            </li>
            <li class="flex justify-between">
              <div class="flex flex-col">
                <span>Vanilla pastry</span>
                <span class="text-s text-secondary">With wholemeal flour</span>
              </div>
              <span>$5.00</span>
            </li>
            <li class="flex justify-between">
              <div class="flex flex-col">
                <span>Blueberry cheese cake</span>
                <span class="text-s text-secondary">With blueberry jam</span>
              </div>
              <span>$7.00</span>
            </li>
          </ul>
        </aside>
      </div>
      
      <footer class="flex items-center justify-between my-m">
        <vaadin-button theme="tertiary-inline">Cancel order</vaadin-button>
        <vaadin-button theme="primary success">
          <iron-icon icon="vaadin:lock" slot="prefix"></iron-icon>
          Pay securely
        </vaadin-button>
      </footer>

      </main>
    `;
  }
}
