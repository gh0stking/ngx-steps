app.component.html
```
<c-steps [items]="items"></c-steps>
```


app.component.ts:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[];
  constructor() {
    this.items = [
      {
        label: '第一阶段',
        command: (event: any) => {
          console.log(event);
        }
      },
      {
        label: '第二阶段',
        command: (event: any) => {
          console.log(event);
        }
      },
      {
        label: '第三阶段',
        command: (event: any) => {
          console.log(event);
        }
      },
      {
        label: '第四阶段',
        command: (event: any) => {
          console.log(event);
        }
      },
      {
        label: '第五阶段',
        command: (event: any) => {
          console.log(event);
        }
      }
    ];
  }
}
```
