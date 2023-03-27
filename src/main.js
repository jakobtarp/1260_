import "./style.css";

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".box1", () => {
  animate(".box1", { x: [-2000, 0] }, { duration: 1 });
});

inView(".box2", () => {
  animate(".box2", { x: [-3000, 0] }, { duration: 3 });
});
