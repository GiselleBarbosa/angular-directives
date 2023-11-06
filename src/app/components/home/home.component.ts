import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` <h1>Directives Examples</h1>
    <h4>Reference</h4>
    <p>
      Author: Astrit Shuli
      <a
        href="https://medium.com/stackademic/mastering-angular-custom-directives-a-comprehensive-guide-with-15-real-world-examples-2023-a1d4645c4a0f
"
      >
        <p>Publication link (Medium)</p></a
      >
    </p>

    <section>
      <h2>15 Real-World Custom Directive Examples</h2>
      <ol>
        <li>
          <span>1. Custom Validation Directive</span>
          <p>Create a directive for custom form validation</p>
        </li>
        <li>
          <span>2. Autofocus Directive</span>
          <p>Automatically focus an input field when a page loads</p>
        </li>
        <li>
          <span>3. Lazy Load Images Directive</span>
          <p>Load images only when they are visible on the screen.</p>
        </li>

        <li>
          <span>4. Drag-and-Drop Directive</span>
          <p>Implement drag-and-drop functionality for elements.</p>
        </li>

        <li>
          <span>5. Ellipsis Directive</span>
          <p>Add an ellipsis to text that overflows its container.</p>
        </li>

        <li>
          <span>6. Click Outside Directive</span>
          <p>Close a dropdown or modal when clicking outside of it.</p>
        </li>

        <li>
          <span>7. Confirm Dialog Directive</span>
          <p>Create a confirmation dialog for critical actions.</p>
        </li>

        <li>
          <span>8. Infinite Scroll Directive</span>
          <p>Implement infinite scrolling for long lists.</p>
        </li>

        <li>
          <span>9. Highlight Search Results Directive</span>
          <p>Highlight search query matches in search results.</p>
        </li>

        <li>
          <span>10. Responsive Directive</span>
          <p>Show or hide elements based on the screen size.</p>
        </li>

        <li>
          <span>11. Input Mask Directive</span>
          <p>Format input values as the user types.</p>
        </li>

        <li>
          <span>12. Tooltip Directive</span>
          <p>Display tooltips on elements with additional information.</p>
        </li>

        <li>
          <span>13. Disable Right-Click Directive</span>
          <p>Prevent right-clicking on specific elements.</p>
        </li>

        <li>
          <span>14. TimeAgo Directive</span>
          <p>Display the time elapsed since a certain date.</p>
        </li>

        <li>
          <span>15. Copy to Clipboard Directive </span>
          <p>Allow users to copy text to the clipboard with a single click.</p>
        </li>
      </ol>
    </section>`,
  styles: [''],
})
export class HomeComponent {}
