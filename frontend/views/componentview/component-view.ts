import {html, LitElement, render, customElement, state} from 'lit-element';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-combo-box';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-select';
import {guard} from 'lit/directives/guard.js';
import '@vaadin/vaadin-text-field/vaadin-email-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import {MenuBarItem} from "@vaadin/vaadin-menu-bar/vaadin-menu-bar";
import {ContextMenuItem} from "@vaadin/vaadin-context-menu/vaadin-context-menu";



@customElement('component-view')
export class ComponentView extends LitElement {
  createRenderRoot() {
    // Do not use a shadow root
    return this;
  }

  @state()
  private comboItems = ['Google Chrome', 'Microsoft Edge', 'Mozilla Firefox', 'Safari'];

  @state()
  private menubarItems = [
    { text: 'Button' },
    { text: 'Disabled', disabled: true },
    {
      text: 'Menu',
      children: [
        {
          text: 'Item one',
          children: [{ text: 'Subitem one' }, { text: 'Subitem two' }, { text: 'Subitem three' }],
        },
        { text: 'Item two' },
        { text: 'Item three' },
        { component: 'hr' },
        { text: 'Item four' },
        { text: 'Item five' },
      ],
    },
    {
      text: 'Checkable menu',
      children: [
        {
          text: 'Item one',
          children: [{ text: 'Subitem one', checked: true }, { text: 'Subitem two' }, { text: 'Subitem three' }],
        },
        { text: 'Item two' },
        { text: 'Item three', checked: true },
        { component: 'hr' },
        { text: 'Item four' },
        { text: 'Item five' },
      ],
    },
  ];

  @state()
  private menubarItemSelected?: MenuBarItem;

  @state()
  private dialogOpened = false;

  @state()
  private confirmDialogOpened = false;

  @state()
  private notificationOpened1 = false;

  @state()
  private notificationOpened2 = false;

  @state()
  private contextMenuItems: ContextMenuItem[] = [
    { text: 'Abigail Lewis', checked: true },
    { text: 'Allison Torres' },
    { text: 'Anna Myers' },
    { text: 'Lauren Wright' },
    { text: 'Tamaki Ryushi' },
  ];

  render() {
    return html`
      <vaadin-tabs style="background: var(--lumo-base-color); position: sticky; top: 0; z-index: 1;">
        <vaadin-tab><a href="#inputs">Form inputs</a></vaadin-tab>
        <vaadin-tab><a href="#interaction">Navigation & interaction</a></vaadin-tab>
        <vaadin-tab><a href="#containers">Layouts & containers</a></vaadin-tab>
      </vaadin-tabs>

      <main class="grid gap-xl items-start justify-center max-w-screen-lg mx-auto pb-l px-l">  
        <h2 id="inputs">Form inputs</h2>
        <section>
          <h3>Text Field</h3>
          <vaadin-text-field label="Street Address" value="Ruukinkatu 2"></vaadin-text-field>
          <vaadin-text-field label="Street Address" placeholder="Street or code" required></vaadin-text-field>
          <vaadin-text-field label="Street Address" helper-text="Street or code"></vaadin-text-field>
          <vaadin-text-field label="Street Address" invalid error-message="Not valid"></vaadin-text-field>
          <vaadin-text-field label="Street Address" focused></vaadin-text-field>
          <vaadin-text-field label="Street Address" focused focus-ring></vaadin-text-field>
          <vaadin-text-field label="Street Address" value="Ruukinkatu 2" clear-button-visible>
            <vaadin-icon slot="prefix" icon="vaadin:map-marker"></vaadin-icon>
          </vaadin-text-field>
        </section>
        
        <section>
          <h3>Text Area</h3>
          <vaadin-text-area label="Street Address" value="Ruukinkatu 2"></vaadin-text-area>
          <vaadin-text-area label="Street Address" placeholder="Street or code" required></vaadin-text-area>
          <vaadin-text-area label="Street Address" helper-text="Street or code"></vaadin-text-area>
          <vaadin-text-area label="Street Address" invalid error-message="Not valid"></vaadin-text-area>
          <vaadin-text-area label="Street Address" focused></vaadin-text-area>
          <vaadin-text-area label="Street Address" focused focus-ring></vaadin-text-area>
          <vaadin-text-area label="Street Address" value="Ruukinkatu 2" clear-button-visible>
            <vaadin-icon slot="prefix" icon="vaadin:map-marker"></vaadin-icon>
          </vaadin-text-area>
        </section>
        
        <section>
          <h3>Other fields</h3>
          <vaadin-password-field label="Password field" value="Ex@mplePassw0rd"></vaadin-password-field>
          <vaadin-number-field label="Number field" value="500"></vaadin-number-field>
          <vaadin-number-field label="Number field" value="500.00"theme="align-right"><div slot="suffix">USD</div></vaadin-number-field>
          <vaadin-integer-field label="Number field" value="5" has-controls></vaadin-integer-field>
          <vaadin-email-field label="Email address" name="email" value="julia.scheider@email.com" error-message="Please enter a valid email address" clear-button-visible></vaadin-email-field>
        </section>
        
        <section>
          <h3>Date & Time Pickers</h3>
          <div>
              <vaadin-date-picker label="Start date"></vaadin-date-picker>
              <vaadin-date-picker label="Start date" value="2022-03-26" clear-button-visible></vaadin-date-picker>
              <vaadin-date-picker label="Start date"  placeholder="DD/MM/YYYY"  helper-text="Format: DD/MM/YYYY"></vaadin-date-picker>
          </div>
          <div>
              <vaadin-time-picker label="Start time"></vaadin-time-picker>
              <vaadin-time-picker label="Start time" value="12:30" clear-button-visible></vaadin-time-picker>
              <vaadin-time-picker label="Start time"  placeholder="HH:MM"  helper-text="Format: HH:MM"></vaadin-time-picker>
          </div>
          <div>
              <vaadin-date-time-picker label="Start date and time"></vaadin-date-time-picker>
              <vaadin-date-time-picker label="Start date and time" value="2022-03-26T12:30" clear-button-visible></vaadin-date-time-picker>
              <vaadin-date-time-picker label="Start date and time" date-placeholder="DD/MM/YYYY" time-placeholder="HH:MM" helper-text="Format: DD/MM/YYYY and HH:MM"></vaadin-date-time-picker>
          </div>
        </section>
        
        <section>
          <h3>Combo Box & Select</h3>
          <vaadin-combo-box label="Browser" .items="${this.comboItems}"></vaadin-combo-box>
          <vaadin-combo-box label="Browser" .items="${this.comboItems}" value="Mozilla Firefox"></vaadin-combo-box>
          <vaadin-combo-box label="Browser" .items="${this.comboItems}" placeholder="Pick one" helper-text="Most common browsers"></vaadin-combo-box>
          <vaadin-combo-box label="Browser" .items="${this.comboItems}" invalid error-message="Not valid"></vaadin-combo-box>
          <vaadin-select label="Browser"
            .renderer="${guard(
                  [],() => (root: HTMLElement) => render(
                      html`
                        <vaadin-list-box>
                          <vaadin-item value="chrome">Google Chrome</vaadin-item>
                          <vaadin-item value="edge">Microsoft Edge</vaadin-item>
                          <vaadin-item value="firefox">Mozilla Firefox</vaadin-item>
                          <vaadin-item value="safari">Safari</vaadin-item>
                        </vaadin-list-box>
                      `, root)
              )}"
          ></vaadin-select>
          <vaadin-select label="Browser" value="firefox"
            .renderer="${guard(
        [],() => (root: HTMLElement) => render(
            html`
                        <vaadin-list-box>
                          <vaadin-item value="chrome">Google Chrome</vaadin-item>
                          <vaadin-item value="edge">Microsoft Edge</vaadin-item>
                          <vaadin-item value="firefox">Mozilla Firefox</vaadin-item>
                          <vaadin-item value="safari">Safari</vaadin-item>
                        </vaadin-list-box>
                      `, root)
    )}"
          ></vaadin-select>
          <vaadin-select label="Browser" placeholder="Pick one" helper-text="Most common browsers"
            .renderer="${guard(
        [],() => (root: HTMLElement) => render(
            html`
                        <vaadin-list-box>
                          <vaadin-item value="chrome">Google Chrome</vaadin-item>
                          <vaadin-item value="edge">Microsoft Edge</vaadin-item>
                          <vaadin-item value="firefox">Mozilla Firefox</vaadin-item>
                          <vaadin-item value="safari">Safari</vaadin-item>
                        </vaadin-list-box>
                      `, root)
    )}"
          ></vaadin-select>
          <vaadin-select label="Browser" invalid error-message="Not valid"
            .renderer="${guard(
        [],() => (root: HTMLElement) => render(
            html`
                        <vaadin-list-box>
                          <vaadin-item value="chrome">Google Chrome</vaadin-item>
                          <vaadin-item value="edge">Microsoft Edge</vaadin-item>
                          <vaadin-item value="firefox">Mozilla Firefox</vaadin-item>
                          <vaadin-item value="safari">Safari</vaadin-item>
                        </vaadin-list-box>
                      `, root)
    )}"
          ></vaadin-select>
        </section>
        
        <section>
          <h3>List Box</h3>
          <vaadin-list-box multiple .selectedValues="${[0, 2]}">
            <vaadin-item>Show assignee</vaadin-item>
            <vaadin-item>Show due date</vaadin-item>
            <vaadin-item>Show status</vaadin-item>
          </vaadin-list-box>
        </section>
        
        <section>
          <h3>Checkbox & Radio button groups</h3>
          <vaadin-checkbox-group label="Export" theme="vertical">
            <vaadin-checkbox value="0">Order ID</vaadin-checkbox>
            <vaadin-checkbox value="1">Product name</vaadin-checkbox>
            <vaadin-checkbox value="2">Customer</vaadin-checkbox>
            <vaadin-checkbox value="3" disabled>Status</vaadin-checkbox>
          </vaadin-checkbox-group>
          <vaadin-radio-group label="Travel class" theme="vertical">
            <vaadin-radio-button value="economy">Economy</vaadin-radio-button>
            <vaadin-radio-button value="business">Business</vaadin-radio-button>
            <vaadin-radio-button value="firstClass">First Class</vaadin-radio-button>
            <vaadin-radio-button value="firstClass" disabled>Priority</vaadin-radio-button>
          </vaadin-radio-group>
        </section>
        
        <section>
          <h3>Rich Text Editor</h3>
          <vaadin-rich-text-editor style="max-height: 300px"></vaadin-rich-text-editor>
        </section>
        
        <section>
          <h3>Upload</h3>
          <vaadin-upload></vaadin-upload>
        </section>
        
        <hr>
        
        <h2 id="interaction">Navigation & Interaction</h2>
        <section>
          <h3>Buttons</h3>
          <div>
            <vaadin-button theme="primary">Primary</vaadin-button>
            <vaadin-button>Secondary</vaadin-button>
            <vaadin-button theme="tertiary">Tertiary</vaadin-button>
            <vaadin-button theme="primary icon"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="icon"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="tertiary icon"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="primary"><vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon> Primary</vaadin-button>
            <vaadin-button>Secondary <vaadin-icon icon="vaadin:search" slot="suffix"></vaadin-icon></vaadin-button>
            <vaadin-button theme="tertiary"><vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon> Tertiary</vaadin-button>
           </div>
           <div>
            <vaadin-button theme="primary error">Primary</vaadin-button>
            <vaadin-button theme="error">Secondary</vaadin-button>
            <vaadin-button theme="tertiary error">Tertiary</vaadin-button>
            <vaadin-button theme="primary icon error"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="icon error"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="tertiary icon error"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="primary error"><vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon> Primary</vaadin-button>
            <vaadin-button theme="error">Secondary <vaadin-icon icon="vaadin:search" slot="suffix"></vaadin-icon></vaadin-button>
            <vaadin-button theme="tertiary error"><vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon> Tertiary</vaadin-button>
          </div>
          <div>
            <vaadin-button theme="primary success">Primary</vaadin-button>
            <vaadin-button theme="success">Secondary</vaadin-button>
            <vaadin-button theme="tertiary success">Tertiary</vaadin-button>
            <vaadin-button theme="primary icon success"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="icon success"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="tertiary icon success"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="primary success"><vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon> Primary</vaadin-button>
            <vaadin-button theme="success">Secondary <vaadin-icon icon="vaadin:search" slot="suffix"></vaadin-icon></vaadin-button>
            <vaadin-button theme="tertiary success"><vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon> Tertiary</vaadin-button>
          </div>
          <div>
            <vaadin-button theme="primary contrast">Primary</vaadin-button>
            <vaadin-button theme="contrast">Secondary</vaadin-button>
            <vaadin-button theme="tertiary contrast">Tertiary</vaadin-button>
            <vaadin-button theme="primary icon contrast"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="icon contrast"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="tertiary icon contrast"><vaadin-icon icon="vaadin:search"></vaadin-icon></vaadin-button>
            <vaadin-button theme="primary contrast"><vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon> Primary</vaadin-button>
            <vaadin-button theme="contrast">Secondary <vaadin-icon icon="vaadin:search" slot="suffix"></vaadin-icon></vaadin-button>
            <vaadin-button theme="tertiary contrast"><vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon> Tertiary</vaadin-button>
          </div>
        </section>
        
        <section>
          <h3>Menu Bar</h3>
          <vaadin-menu-bar theme="primary" .items="${this.menubarItems}" @item-selected="${this.menubarItemSelected}"></vaadin-menu-bar>
          <vaadin-menu-bar .items="${this.menubarItems}" @item-selected="${this.menubarItemSelected}"></vaadin-menu-bar>
          <vaadin-menu-bar theme="tertiary" .items="${this.menubarItems}" @item-selected="${this.menubarItemSelected}"></vaadin-menu-bar>
        </section>
        
        <section>
          <h3>Context Menu</h3>
          <vaadin-context-menu .items="${this.contextMenuItems}">
            <span>Right click here</span>
          </vaadin-context-menu>
        </section>
        
        <section class="flex flex-col gap-s">
          <h3>Badge</h3>
          <div>
            <span theme="badge">Pending</span>
            <span theme="badge success">Confirmed</span>
            <span theme="badge error">Denied</span>
            <span theme="badge contrast">On hold</span>
            <vaadin-icon icon="vaadin:check" style="padding: var(--lumo-space-xs)" theme="badge success"></vaadin-icon>
            <vaadin-icon icon="vaadin:close-small" style="padding: var(--lumo-space-xs)" theme="badge error"></vaadin-icon>
            <span theme="badge">8</span>
          </div>
          <div>
            <span theme="badge primary">Pending</span>
            <span theme="badge primary success">Confirmed</span>
            <span theme="badge primary error">Denied</span>
            <span theme="badge primary contrast">On hold</span>
            <vaadin-icon icon="vaadin:check" style="padding: var(--lumo-space-xs)" theme="badge primary success"></vaadin-icon>
            <vaadin-icon icon="vaadin:close-small" style="padding: var(--lumo-space-xs)" theme="badge primary error"></vaadin-icon>
            <span theme="badge primary">8</span>
          </div>
          <div>
            <span theme="badge pill">Pending</span>
            <span theme="badge pill success">Confirmed</span>
            <span theme="badge pill error">Denied</span>
            <span theme="badge pill contrast">On hold</span>
            <vaadin-icon icon="vaadin:check" style="padding: var(--lumo-space-xs)" theme="badge pill success"></vaadin-icon>
            <vaadin-icon icon="vaadin:close-small" style="padding: var(--lumo-space-xs)" theme="badge pill error"></vaadin-icon>
            <span theme="badge pill">8</span>
          </div>
        </section>
        
        <section>
          <h3>Tabs</h3>
          <vaadin-tabs>
            <vaadin-tab>Selected</vaadin-tab>
            <vaadin-tab>Unselected</vaadin-tab>
            <vaadin-tab disabled>Disabled</vaadin-tab>
          </vaadin-tabs>
          <vaadin-tabs orientation="vertical" style="width: 240px;">
            <vaadin-tab>Selected</vaadin-tab>
            <vaadin-tab>Unselected</vaadin-tab>
            <vaadin-tab disabled>Disabled</vaadin-tab>
          </vaadin-tabs>
        </section>
        
        <section>
        <!-- TODO -->
          <h3>Avatar</h3>
          <vaadin-avatar></vaadin-avatar>
          <vaadin-avatar name="Jason Bailey"></vaadin-avatar>
          <vaadin-avatar img="https://randomuser.me/api/portraits/women/33.jpg"></vaadin-avatar>
        </section>
        
        <section>
          <h3>Progress bar</h3>
          <vaadin-progress-bar value="0.5"></vaadin-progress-bar>
          <vaadin-progress-bar indeterminate></vaadin-progress-bar>
        </section>
        
        <hr>
        
        <h2 id="containers">Layouts & containers</h2>
        <section>
          <h3>Accordion & Details</h3>
          <div class="flex flex-row gap-m">
            <vaadin-accordion style="width: 50%;">
              <vaadin-accordion-panel>
                <div slot="summary">Personal information</div>
      
                <vaadin-vertical-layout>
                  <span>Sophia Williams</span>
                  <span>sophia.williams@company.com</span>
                  <span>(501) 555-9128</span>
                </vaadin-vertical-layout>
              </vaadin-accordion-panel>
      
              <vaadin-accordion-panel>
                <div slot="summary">Billing address</div>
      
                <vaadin-vertical-layout>
                  <span>4027 Amber Lake Canyon</span>
                  <span>72333-5884 Cozy Nook</span>
                  <span>Arkansas</span>
                </vaadin-vertical-layout>
              </vaadin-accordion-panel>
      
              <vaadin-accordion-panel>
                <div slot="summary">Payment</div>
      
                <vaadin-vertical-layout>
                  <span>MasterCard</span>
                  <span>1234 5678 9012 3456</span>
                  <span>Expires 06/21</span>
                </vaadin-vertical-layout>
              </vaadin-accordion-panel>
            </vaadin-accordion>
            
            <vaadin-accordion style="width: 50%;">
              <vaadin-accordion-panel theme="filled reverse">
                <div slot="summary">Personal information</div>
      
                <vaadin-vertical-layout>
                  <span>Sophia Williams</span>
                  <span>sophia.williams@company.com</span>
                  <span>(501) 555-9128</span>
                </vaadin-vertical-layout>
              </vaadin-accordion-panel>
      
              <vaadin-accordion-panel theme="filled reverse">
                <div slot="summary">Billing address</div>
      
                <vaadin-vertical-layout>
                  <span>4027 Amber Lake Canyon</span>
                  <span>72333-5884 Cozy Nook</span>
                  <span>Arkansas</span>
                </vaadin-vertical-layout>
              </vaadin-accordion-panel>
      
              <vaadin-accordion-panel theme="filled reverse">
                <div slot="summary">Payment</div>
      
                <vaadin-vertical-layout>
                  <span>MasterCard</span>
                  <span>1234 5678 9012 3456</span>
                  <span>Expires 06/21</span>
                </vaadin-vertical-layout>
              </vaadin-accordion-panel>
            </vaadin-accordion>
          </div>
        </section>
        
        <section>
          <h3>Dialogs</h3>
            <vaadin-button @click="${() => (this.dialogOpened = true)}">Open dialog</vaadin-button>
            <vaadin-dialog .opened="${this.dialogOpened}">
              <template>
                <div>This simple dialog will close by pressing the Esc key,</div>
                <div> or by a mouse click anywhere outside the dialog area</div>
              </template>
            </vaadin-dialog>
          
            <vaadin-button @click="${() => (this.confirmDialogOpened = true)}">Open confirm dialog</vaadin-button>
            <vaadin-confirm-dialog header="Unsaved changes" cancel reject reject-text="Discard" confirm-text="Save" .opened="${this.confirmDialogOpened}">
              There are unsaved changes. Do you want to discard or save them?
            </vaadin-confirm-dialog>
        </section>

<!--  This section fails for some reason in 22.0.4
        <section>
          <h3>Notification</h3>
          <vaadin-button @click="${() => (this.notificationOpened1 = true)}">Open notification</vaadin-button>
          <vaadin-button @click="${() => (this.notificationOpened2 = true)}">Open notification</vaadin-button>
          <vaadin-notification .opened="${this.notificationOpened1}">
              <template>
                <vaadin-horizontal-layout theme="spacing" style="align-items: center">
                  <vaadin-icon icon="vaadin:check-circle" style="color: var(--lumo-success-color)"></vaadin-icon>
                  <div>
                    <b style="color: var(--lumo-success-text-color);">Upload successful</b>
                    <div style="font-size: var(--lumo-font-size-s); color: var(--lumo-secondary-text-color)">
                    <b>Financials.xlsx</b> is now available in <a href="#">Documents</a>
                    </div>
                  </div>
                  <vaadin-button theme="tertiary-inline" @click="${this.notificationOpened1 = false}" aria-label="Close">
                    <vaadin-icon icon="lumo:cross"></vaadin-icon>
                  </vaadin-button>
                </vaadin-horizontal-layout>
              </template>
            </vaadin-notification>
            <vaadin-notification .opened="${this.notificationOpened2}">
              <template>
                <vaadin-horizontal-layout theme="spacing" style="align-items: center">
                  <vaadin-avatar name="Jason Bailey"></vaadin-avatar>
                  <div><b>Jason Bailey</b> mentioned you in <a href="#">Project Q4</a></div>
                  <vaadin-button theme="tertiary-inline" @click="${this.notificationOpened2 = false}" aria-label="Close">
                    <vaadin-icon icon="lumo:cross"></vaadin-icon>
                  </vaadin-button>
                </vaadin-horizontal-layout>
              </template>
            </vaadin-notification>
        </section>
-->
        <section>
          <!-- TODO -->
          <h3>Message List</h3>
          <vaadin-message-list
            .items="${[
                {
                  text: 'Linsey, could you check if the details with the order are okay?',
                  userName: 'Matt Mambo',
                  userColorIndex: 1,
                },
                {
                  text: 'All good. Ship it.',
                  userName: 'Linsey Listy',
                  userColorIndex: 2,
                },
              ]}"
          ></vaadin-message-list>
        </section>
        
        <section>
          <!-- TODO -->
          <h3>App Layout</h3>
        </section>
        
        <section>
          <!-- TODO -->
          <h3>Split Layout</h3>
          <vaadin-split-layout style="min-height: 300px;">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat luctus tincidunt. Donec condimentum a eros sed placerat. Morbi non magna ut libero euismod condimentum.</span>
            <div>
              <vaadin-split-layout orientation="vertical" style="height: 100%;">
              <span>Vivamus sit amet ullamcorper lectus, vitae sollicitudin purus. A elementum mauris iaculis.</span>
              <span>In metus tortor, sollicitudin a feugiat sit amet, porttitor id libero. Nullam viverra lorem sit amet mi consequat.</span>
              </vaadin-split-layout>
            </div>
          </vaadin-split-layout>
        </section>
        
      </main>
    `;
  }

}
