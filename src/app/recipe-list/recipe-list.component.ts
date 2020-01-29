import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  favorited = "heart-button-off";
  favorite() {
    // let fav:any = document.getElementsByClassName(".heart-button-off");
    // let favOn:any = document.getElementsByClassName(".heart-button-on");
    if (this.favorited === "heart-button-off") {
      // fav.style.display = "none";
      // fav.style.visibility = "hidden";

      // favOn.style.display = "block";
      // favOn.style.visibility = "visible";

      this.favorited = "heart-button-on";
    } else {
      this.favorited = "heart-button-off";
    }
  }

  activeClass = "hide-details";
  toggleClass() {
    if (this.activeClass === "hide-details") {
      this.activeClass = "show-details";
    } else {
      this.activeClass = "hide-details";
    }
  }
}
