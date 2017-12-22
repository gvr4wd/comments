import {Component} from "@angular/core";

@Component({
  selector: "app-root",
  // templateUrl: './app.component.html',,
  template: `
    <app-comments [comments]='postComments'></app-comments>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  const
  postComments = [

    {
      text: "1",
      comments: [
        {
          text: "1.1",
          comments: [
            {
              text: "1.1.1 "
            }
          ]
        },
        {
          text: "1.2",
          comments: [
            {
              text: "1.2.1"
            }
          ]
        }
      ]
    },
    {
      text: "2",
      comments: [
        {
          text: "2.1",
          comments: [
            {
              text: "2.1.1"
            }
          ]
        }
      ]
    }
  ];
}
